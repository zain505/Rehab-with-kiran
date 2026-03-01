// BlogPage.js
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Blog.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import axios from "axios";
import ReactLoading from 'react-loading'


export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs,setBlogs] = useState([])
  const [loading, setLoading] = useState(false)
  const getBlogDataById = async(id)=>{
    await axios.get(`http://localhost:5000/user/getBlogById&Id=${id}`)
    .then(response=>{
      if(response.status===200)
      {
      setSelectedBlog(response.data)
      console.log(response.data)
      setLoading(false)
    }
    })
    .catch(error=>{
      setSelectedBlog(null)
      setLoading(false)
    })
  }

  const getAllBlogs = async ()=>{
    setLoading(true)
    await axios.get("http://localhost:5000/user/getBlogs")
    .then(response=>{
      if(response.status===200)
      {
      setBlogs(response.data)
      setLoading(false)
    }
    })
    .catch(error=>{
      setBlogs([])
      setLoading(false)
    })
  }
  useEffect(()=>{
    getAllBlogs()
  },[])
  if (selectedBlog) {
    return (
      <>
        <Navbar />
        <ScrollToTop />
        <div className="container">
          
          <button onClick={() => setSelectedBlog(null)} className="back-button">
            ← Back to Blogs
          </button>
          {loading && <div style={{backgroundColor:'blue', display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}><ReactLoading type="spin" color="black" height={50} width={50}/></div>}
          
          {!loading && <>
          <h1 className="title">{selectedBlog.title}</h1>
          <p className="meta">By Dr. Kiran Fatima - {new Date(selectedBlog.creationDate).toDateString()}</p>
          <img src={`data:image/jpeg;base64,${selectedBlog.blogPicture}`} alt={selectedBlog.title} className="blog-image" />
          <p className="content">{selectedBlog.description}</p></>}

        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="container">
        <h1 className="heading">Latest Blogs</h1>
        <div className="grid">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.02 }}
              className="blog-card"
              onClick={() => getBlogDataById(blog._id)}
            >
              <img src={`data:image/jpeg;base64,${blog.blogPicture}`} alt={blog.title} className="card-image" />
              <div className="card-content">
                <h2 className="card-title">{blog.title}</h2>
                <p className="card-meta">{`${blog.description.slice(0,50)}...`}</p>
                <p className="card-meta">By - Kiran Fatima Date: {new Date(blog.creationDate).toDateString()}</p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
