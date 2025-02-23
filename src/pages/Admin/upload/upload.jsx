// import axios from "axios";
// import { useState, useEffect } from "react";
// import { db } from "../../../Firebase/config";
// import { collection, addDoc, getDocs } from "firebase/firestore";

// const UploadFile = () => {
//     const [fileUpload, setFileUpload] = useState({
//         file: null,
//         upload_preset: "home_image"
//     });
//     const [imageGallery, setImageGallery] = useState([]);

//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 const res = await getDocs(collection(db, "image_gallery"));
//                 const images = res.docs.map(doc => doc.data().imageUrl);
//                 setImageGallery(images);
//             } catch (error) {
//                 console.log("Error fetching images:", error);
//             }
//         };

//         fetchImages();
//     }, []);

//     const handleFileUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setFileUpload({
//                 ...fileUpload,
//                 file: file
//             });
//         }
//     };

//     const API_URL = process.env.REACT_APP_CLOUSINARY_API;

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append("file", fileUpload.file);
//             formData.append("upload_preset", fileUpload.upload_preset);

//             const response = await axios.post(API_URL, formData, {
//                 headers: { "Content-Type": "multipart/form-data" }
//             });

//             if (response.status === 200) {
//                 const imageUrl = response.data.secure_url;

//                 await addDoc(collection(db, "image_gallery"), {
//                     imageUrl: imageUrl,
//                     uploadedAt: new Date()
//                 });

//                 setImageGallery(prevImages => [...prevImages, imageUrl]); 
//                 console.log("Image URL stored in Firestore:", imageUrl);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <>
//             <form>
//                 <label> Upload image</label>
//                 <input type="file" accept="image/jpg, image/png" onChange={handleFileUpload} />
//                 <br /><br />
//                 <button onClick={handleSubmit}>Submit</button>
//             </form>

//             <h2>Uploaded Images</h2>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//                 {imageGallery.map((imageUrl, index) => (
//                     <img key={index} src={imageUrl} alt="" width={200} height={200} />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default UploadFile;
