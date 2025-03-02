import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "../../../Firebase/config";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/List.css";

const TestimonialList = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const testimonialsPerPage = 5; // Change this to adjust the number of testimonials per page

    const getTestimonials = async () => {
        try {
            const q = query(collection(db, "testimonials"), orderBy("uploadedAt", "desc"));
            const res = await getDocs(q);
            const testimonialArray = res.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id,
                    quote: data.quote || "No Quote",
                    writer_name: data.writer_name || "Anonymous",
                    writer_about: data.writer_about || "No Information",
                    writer_picture: data.writer_picture || "",
                    uploadedAt: data.uploadedAt || null,
                };
            });

            setTestimonials(testimonialArray);
        } catch (error) {
            console.error("Error fetching testimonials:", error);
            toast.error("Failed to fetch testimonials!");
        }
    };

    useEffect(() => {
        getTestimonials();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "testimonials", id));
            toast.success("Testimonial successfully deleted");
            setTestimonials((prevTestimonials) => prevTestimonials.filter((testimonial) => testimonial.id !== id));
        } catch (error) {
            console.error("Error deleting testimonial:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    // Pagination Logic
    const indexOfLastTestimonial = currentPage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    return (
        <div className="offer-container">
            <h2>Testimonials List</h2>
            <Link className="create-btn" to="/createtestimonial">+ Add Testimonial</Link>
            <table className="offer-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Quote</th>
                        <th>Writer Name</th>
                        <th>Writer About</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTestimonials.map((item, index) => (
                        <tr key={item.id}>
                            <td>{indexOfFirstTestimonial + index + 1}</td>
                            <td>{item.quote}</td>
                            <td>{item.writer_name}</td>
                            <td>{item.writer_about}</td>
                            <td>
                                {item.writer_picture && <img src={item.writer_picture} alt="Writer" className="offer-img" />}
                            </td>
                            <td>
                                <div className="crudbuttons">
                                    <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                                    <Link className="edit-btn" to={`/createtestimonial/${item.id}`}>Edit</Link>
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

export default TestimonialList;
