import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";

const Dashboard = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [bpStatus, setBpStatus] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Blood Pressure Calculation
  const checkBloodPressure = () => {
    if (!systolic || !diastolic) return;
    let status = "";
    if (systolic < 90 || diastolic < 60) {
      status = "Low Blood Pressure";
    } else if (systolic > 140 || diastolic > 90) {
      status = "High Blood Pressure";
    } else {
      status = "Normal Blood Pressure";
    }
    setBpStatus(status);
  };

  // To-Do List Handlers
  const addTask = () => {
    if (task.trim() !== "") {
      setTodoList([...todoList, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-uppercase">🏆 Sports Dashboard</h1>

      <div className="row">
        {/* Live Time Card */}
        <div className="col-md-4">
          <div className="card shadow-lg text-white bg-primary">
            <div className="card-body text-center">
              <h5 className="card-title">⏰ Live Time</h5>
              <h3 className="display-6">{time}</h3>
            </div>
          </div>
        </div>

        {/* Blood Pressure Calculator */}
        <div className="col-md-4">
          <div className="card shadow-lg bg-danger text-white">
            <div className="card-body text-center">
              <h5 className="card-title">❤️ Blood Pressure Checker</h5>
              <input
                type="number"
                className="form-control mb-2"
                placeholder="Systolic (mmHg)"
                value={systolic}
                onChange={(e) => setSystolic(e.target.value)}
              />
              <input
                type="number"
                className="form-control mb-2"
                placeholder="Diastolic (mmHg)"
                value={diastolic}
                onChange={(e) => setDiastolic(e.target.value)}
              />
              <button className="btn btn-light" onClick={checkBloodPressure}>
                Check BP
              </button>
              {bpStatus && <p className="mt-2 fw-bold">{bpStatus}</p>}
            </div>
          </div>
        </div>

        {/* To-Do List */}
        <div className="col-md-4">
          <div className="card shadow-lg bg-success text-white">
            <div className="card-body">
              <h5 className="card-title text-center ">📋 To-Do List</h5>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
                <button className="btn btn-light ms-2" onClick={addTask}>
                  Add
                </button>
              </div>
              <ul className="list-group mt-3">
                {todoList.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeTask(index)}
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sports News & Upcoming Events */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="card-title">🏅 Latest Sports News</h5>
              <p>🏀 NBA Finals: Lakers vs. Celtics - Game 7 Tonight!</p>
              <p>⚽️ UEFA Champions League: Real Madrid Wins Again!</p>
              <p>🏏 Pakistan vs. India Cricket Match This Sunday</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="card-title">📅 Upcoming Sports Events</h5>
              <p>🏌️ Golf Tournament - July 15</p>
              <p>🏃‍♂️ Marathon Race - August 10</p>
              <p>🏇 Horse Racing - September 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
