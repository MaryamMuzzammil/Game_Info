import { useEffect, useState } from "react";
import { addDoc, collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/config";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/Create.css";

const CreateNews = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [fileUpload, setFileUpload] = useState({
        file: null,
        preview: "",
        upload_preset: "offer_team_image",
    });

    const [formData, setFormData] = useState({
        news_content: "",
        news_date: "",
        news_picture: "",
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

        if (!formData.news_content || !formData.news_date) {
            setError("All fields are required");
            return;
        }

        try {
            let imageUrl = formData.news_picture;

            if (fileUpload.file) {
                const uploadedUrl = await uploadFile();
                if (uploadedUrl) {
                    imageUrl = uploadedUrl;
                } else {
                    return;
                }
            }

            const newsData = {
                ...formData,
                news_picture: imageUrl,
                uploadedAt: new Date().toISOString(),
            };

            if (params.id) {
                await updateDoc(doc(db, "news", params.id), newsData);
                toast.success("News updated successfully!", {
                    onClose: () => navigate("/news"),
                });
            } else {
                await addDoc(collection(db, "news"), newsData);
                toast.success("News added successfully!", {
                    onClose: () => navigate("/news"),
                });
            }

            setFormData({
                news_content: "",
                news_date: "",
                news_picture: "",
                uploadedAt: new Date().toISOString(),
            });
            setFileUpload({ file: null, preview: "" });

        } catch (error) {
            console.error("Error submitting news:", error);
            toast.error("Something went wrong!");
        }
    };

    const getDataById = async (id) => {
        try {
            const res = await getDoc(doc(db, "news", id));
            if (res.exists()) {
                const data = res.data();
                setFormData(data);
                if (data.news_picture) {
                    setFileUpload((prev) => ({
                        ...prev,
                        preview: data.news_picture,
                    }));
                }
            } else {
                toast.error("News not found!");
            }
        } catch (error) {
            console.error("Error fetching news:", error);
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
            <h2>{params.id ? "Edit News" : "Create News"}</h2>

            <form onSubmit={handleSubmit}>
                {error && <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>}

                <div>
                    <label>News Content</label>
                    <textarea name="news_content" value={formData.news_content} onChange={handleInputChange} />
                </div>

                <div>
                    <label>News Date</label>
                    <input type="date" name="news_date" value={formData.news_date} onChange={handleInputChange} />
                </div>

                <div>
                    <label>News Image</label>
                    <input type="file" accept="image/png, image/jpeg" onChange={handleInputFile} className="imgform" />
                    {fileUpload.preview && <img src={fileUpload.preview} alt="Preview" className="image-preview" />}
                </div>

                <div>
                    <input className="submit_btn" type="submit" value={params.id ? "Edit" : "Submit"} />
                </div>
            </form>
        </div>
    );
};

export default CreateNews;
