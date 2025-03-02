import { useEffect, useState } from "react";
import { addDoc, collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/config";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/Create.css";

const CreateTestimonials = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [fileUpload, setFileUpload] = useState({
        file: null,
        preview: "",
        upload_preset: "offer_team_image",
    });

    const [formData, setFormData] = useState({
        quote: "",
        writer_name: "",
        writer_about: "",
        writer_picture: "",
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

        if (!formData.quote || !formData.writer_name || !formData.writer_about) {
            setError("All fields are required");
            return;
        }

        try {
            let imageUrl = formData.writer_picture;

            if (fileUpload.file) {
                const uploadedUrl = await uploadFile();
                if (uploadedUrl) {
                    imageUrl = uploadedUrl;
                } else {
                    return;
                }
            }

            const testimonialData = {
                ...formData,
                writer_picture: imageUrl,
                uploadedAt: new Date().toISOString(),
            };

            if (params.id) {
                await updateDoc(doc(db, "testimonials", params.id), testimonialData);
                toast.success("Testimonial updated successfully!", {
                    onClose: () => navigate("/testimonials"),
                });
            } else {
                await addDoc(collection(db, "testimonials"), testimonialData);
                toast.success("Testimonial added successfully!", {
                    onClose: () => navigate("/testimonials"),
                });
            }

            setFormData({
                quote: "",
                writer_name: "",
                writer_about: "",
                writer_picture: "",
                uploadedAt: new Date().toISOString(),
            });
            setFileUpload({ file: null, preview: "" });

        } catch (error) {
            console.error("Error submitting testimonial:", error);
            toast.error("Something went wrong!");
        }
    };

    const getDataById = async (id) => {
        try {
            const res = await getDoc(doc(db, "testimonials", id));
            if (res.exists()) {
                const data = res.data();
                setFormData(data);
                if (data.writer_picture) {
                    setFileUpload((prev) => ({
                        ...prev,
                        preview: data.writer_picture,
                    }));
                }
            } else {
                toast.error("Testimonial not found!");
            }
        } catch (error) {
            console.error("Error fetching testimonial:", error);
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
            <h2>{params.id ? "Edit Testimonial" : "Create Testimonial"}</h2>

            <form onSubmit={handleSubmit}>
                {error && <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>}

                <div>
                    <label>Quote</label>
                    <textarea name="quote" value={formData.quote} onChange={handleInputChange} />
                </div>

                <div>
                    <label>Writer Name</label>
                    <input type="text" name="writer_name" value={formData.writer_name} onChange={handleInputChange} />
                </div>

                <div>
                    <label>Writer About</label>
                    <input type="text" name="writer_about" value={formData.writer_about} onChange={handleInputChange} />
                </div>

                <div>
                    <label>Writer Image</label>
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

export default CreateTestimonials;
