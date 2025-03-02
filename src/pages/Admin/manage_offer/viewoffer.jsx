import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "../../../Firebase/config";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/List.css"; // Import CSS file

const OfferList = () => {
    const [offers, setOffers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const offersPerPage = 5; // Change this to adjust the number of offers per page

    const getOffers = async () => {
        try {
            const q = query(collection(db, "offer"), orderBy("uploadedAt", "desc"));
            const res = await getDocs(q);
            const offerArray = res.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id,
                    offer_team: data.offer_team || "No Team",
                    offer_content: data["offer_content "]?.trim() || data.offer_content?.trim() || "No Content",
                    offer_picture: data.offer_picture || "",
                    uploadedAt: data.uploadedAt || null,
                };
            });

            setOffers(offerArray);
        } catch (error) {
            console.error("Error fetching offers:", error);
            toast.error("Failed to fetch offers!");
        }
    };

    useEffect(() => {
        getOffers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "offer", id));
            toast.success("Offer successfully deleted");
            setOffers((prevOffers) => prevOffers.filter((offer) => offer.id !== id));
        } catch (error) {
            console.error("Error deleting offer:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    // Pagination Logic
    const indexOfLastOffer = currentPage * offersPerPage;
    const indexOfFirstOffer = indexOfLastOffer - offersPerPage;
    const currentOffers = offers.slice(indexOfFirstOffer, indexOfLastOffer);

    const totalPages = Math.ceil(offers.length / offersPerPage);

    return (
        <div className="offer-container">
            <h2>Offers List</h2>
            <Link className="create-btn" to="/createoffer">+ Create Offer</Link>
            <table className="offer-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Offer Team</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentOffers.map((item, index) => (
                        <tr key={item.id}>
                            <td>{indexOfFirstOffer + index + 1}</td>
                            <td>{item.offer_team}</td>
                            <td>{item.offer_content || "No Content"}</td>
                            <td>
                                {item.offer_picture && <img src={item.offer_picture} alt="Offer" className="offer-img" />}
                            </td>
                            <td>
                                <div className="crudbuttons">
                                    <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                                    <Link className="edit-btn" to={`/createoffer/${item.id}`}>Edit</Link>
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

export default OfferList;
