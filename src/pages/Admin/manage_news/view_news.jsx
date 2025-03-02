import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "../../../Firebase/config";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/List.css";

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 5; // Number of news articles per page

    const getNews = async () => {
        try {
            const q = query(collection(db, "news"), orderBy("uploadedAt", "asc"));
            const res = await getDocs(q);
            const newsArray = res.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id,
                    news_content: data.news_content || "No Content",
                    news_picture: data.news_picture || "",
                    news_date: data.news_date || "No Date",
                    uploadedAt: data.uploadedAt || null,
                };
            });

            setNews(newsArray);
        } catch (error) {
            console.error("Error fetching news:", error);
            toast.error("Failed to fetch news!");
        }
    };

    useEffect(() => {
        getNews();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "news", id));
            toast.success("News successfully deleted");
            setNews((prevNews) => prevNews.filter((newsItem) => newsItem.id !== id));
        } catch (error) {
            console.error("Error deleting news:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    // Pagination Logic
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

    const totalPages = Math.ceil(news.length / newsPerPage);

    return (
        <div className="offer-container">
            <h2>News List</h2>
            <Link className="create-btn" to="/createnews">+ Add News</Link>
            <table className="offer-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>News Content</th>
                        <th>Date</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentNews.map((item, index) => (
                        <tr key={item.id}>
                            <td>{indexOfFirstNews + index + 1}</td>
                            <td>{item.news_content}</td>
                            <td>{item.news_date}</td>
                            <td>
                                {item.news_picture && <img src={item.news_picture} alt="News" className="offer-img" />}
                            </td>
                            <td>
                                <div className="crudbuttons">
                                    <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                                    <Link className="edit-btn" to={`/createnews/${item.id}`}>Edit</Link>
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

export default NewsList;
