import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "../../../Firebase/config";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/List.css";

const TeamList = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const membersPerPage = 5; // Change this to adjust the number of team members per page

    const getTeamMembers = async () => {
        try {
            const q = query(collection(db, "our_Team"), orderBy("uploadedAt", "asc"));
            const res = await getDocs(q);
            const membersArray = res.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id,
                    teamMember_name: data.teamMember_name || "Unknown",
                    teamMember_about: data.teamMember_about || "No Information",
                    teamMember_picture: data.teamMember_picture || "",
                    uploadedAt: data.uploadedAt || null,
                };
            });

            setTeamMembers(membersArray);
        } catch (error) {
            console.error("Error fetching team members:", error);
            toast.error("Failed to fetch team members!");
        }
    };

    useEffect(() => {
        getTeamMembers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "our_Team", id));
            toast.success("Team member successfully deleted");
            setTeamMembers((prevMembers) => prevMembers.filter((member) => member.id !== id));
        } catch (error) {
            console.error("Error deleting team member:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    // Pagination Logic
    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = teamMembers.slice(indexOfFirstMember, indexOfLastMember);

    const totalPages = Math.ceil(teamMembers.length / membersPerPage);

    return (
        <div className="offer-container">
            <h2>Team Members List</h2>
            <Link className="create-btn" to="/createteam">+ Add Team Member</Link>
            <table className="offer-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>About</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentMembers.map((item, index) => (
                        <tr key={item.id}>
                            <td>{indexOfFirstMember + index + 1}</td>
                            <td>{item.teamMember_name}</td>
                            <td>{item.teamMember_about}</td>
                            <td>
                                {item.teamMember_picture && <img src={item.teamMember_picture} alt="Team Member" className="offer-img" />}
                            </td>
                            <td>
                                <div className="crudbuttons">
                                    <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                                    <Link className="edit-btn" to={`/createteam/${item.id}`}>Edit</Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={currentPage === i + 1 ? "active" : ""}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default TeamList;
