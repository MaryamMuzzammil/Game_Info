import { useEffect, useState } from "react";
import { addDoc, collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/config";
import { toast} from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/Create.css";

const CreateTeam = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [fileUpload, setFileUpload] = useState({
        file: null,
        preview: "",
        upload_preset: "offer_team_image",
    });

    const [formData, setFormData] = useState({
        teamMember_name: "",
        teamMember_about: "",
        teamMember_picture: "",
        uploadedAt: new Date().toISOString(),
    });

    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const API_URL = process.env.REACT_APP_CLOUDINARY_API;
    if (!API_URL) {
        console.error("Cloudinary API URL is missing!");
    }

    const uploadFile = async () => {
        try {
            if (!fileUpload.file) return null;
            const formData = new FormData();
            formData.append("file", fileUpload.file);
            formData.append("upload_preset", fileUpload.upload_preset);

            const res = await axios.post(API_URL, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            return res.data.secure_url;
        } catch (error) {
            console.error("Error uploading file:", error);
            toast.error("Image upload failed");
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.teamMember_name || !formData.teamMember_about) {
            setError("All fields are required");
            return;
        }

        try {
            let imageUrl = formData.teamMember_picture;

            if (fileUpload.file) {
                const uploadedUrl = await uploadFile();
                if (uploadedUrl) {
                    imageUrl = uploadedUrl;
                } else {
                    return;
                }
            }

            const teamData = {
                ...formData,
                teamMember_picture: imageUrl,
                uploadedAt: new Date().toISOString(),
            };

            if (params.id) {
                await updateDoc(doc(db, "our_Team", params.id), teamData);
                toast.success("Team member updated successfully!", {
                    onClose: () => navigate("/team"),
                });
            } else {
                await addDoc(collection(db, "our_Team"), teamData);
                toast.success("Team member added successfully!", {
                    onClose: () => navigate("/team"),
                });
            }

            setFormData({
                teamMember_name: "",
                teamMember_about: "",
                teamMember_picture: "",
                uploadedAt: new Date().toISOString(),
            });
            setFileUpload({ file: null, preview: "" });

        } catch (error) {
            console.error("Error submitting team member:", error);
            toast.error("Something went wrong!");
        }
    };

    const getDataById = async (id) => {
        try {
            const res = await getDoc(doc(db, "our_Team", id));
            if (res.exists()) {
                const data = res.data();
                setFormData(data);
                if (data.teamMember_picture) {
                    setFileUpload((prev) => ({
                        ...prev,
                        preview: data.teamMember_picture,
                    }));
                }
            } else {
                toast.error("Team member not found!");
            }
        } catch (error) {
            console.error("Error fetching team member:", error);
        }
    };

    useEffect(() => {
        if (params.id) {
            getDataById(params.id);
        }
    }, [params.id]);

    const handleInputFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setFileUpload((prev) => ({
                ...prev,
                file,
                preview: fileUrl,
            }));
        }
    };

    return (
        <div className="containerform">
            <h2>{params.id ? "Edit Team Member" : "Add Team Member"}</h2>

            <form onSubmit={handleSubmit}>
                {error && <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>}

                <div>
                    <label>Team Member Name</label>
                    <input type="text" name="teamMember_name" value={formData.teamMember_name} onChange={handleInputChange} />
                </div>

                <div>
                    <label>About</label>
                    <input type="text" name="teamMember_about" value={formData.teamMember_about} onChange={handleInputChange} />
                </div>

                <div>
                    <label>Profile Image</label>
                    <input type="file" accept="image/png, image/jpeg" onChange={handleInputFile} className="imgform" />
                    {fileUpload.preview && <img src={fileUpload.preview} alt="Preview" className="image-preview" />}
                </div>

                <div>
                    <input className="submit_btn" type="submit" value={params.id ? "Update" : "Submit"} />
                </div>
            </form>
        </div>
    );
};

export default CreateTeam;
