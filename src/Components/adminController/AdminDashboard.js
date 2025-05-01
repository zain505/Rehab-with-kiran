import React, { useEffect, useState } from 'react'
import './AdminDashboard.css'
import axios from 'axios'
import NoImage from "../../media/no_image.jpg"

function AdminDashboard() {
  const [tab,setTab] = useState(1)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [blogFile, setFile] = useState(null)
  const [blogs,setBlogs] = useState([])
  const [manageAppointment, setManageAppointment] = useState([])


  const handleTitle = (event)=>{
    setTitle(event.target.value)
  }
  const handleDescription = (event)=>{
    setDescription(event.target.value)
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        alert('Only JPEG and PNG files are allowed.');
        return
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        const cleanBase64 = base64String.replace(/^data:image\/\w+;base64,/, '');
        setFile(cleanBase64);
      }
      reader.readAsDataURL(file);
      console.log('Valid file:', file);
    }
  }

  const handleSubmit = async()=>{
    if(title === "" || description==="")
    {
      return
    }
    const body = {
      title: title,
      description:description,
      blogPicture:blogFile
    }
    try {
      const response = await axios.post("http://192.168.1.10:5000/user/createBlog",body)
      if(response.status===200)
      {
        console.log("Blog uploaded successfully")
      }  
    } catch (error) {
      console.log("error in uploading the blog")
    }
  }

  const deleteBlogById = async(id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this blog");
    if(!confirmDelete)return;
    try {
      const response = await axios.get(`http://192.168.1.10:5000/user//deleteBlogById&Id=${id}`)
      if(response.status===200)
      {
        console.log("Blog deleted successfully")
        setBlogs(prevBlog=>prevBlog.filter(blog=>blog._id !== id))
      } 
    } catch (error) {
      console.log("blog not deleted")
    }
  }

  const handleBlogs = async()=>{
    try {
      const response = await axios.get("http://192.168.1.10:5000/user/getBlogs")
      if(response.status === 200)
      {
        setBlogs(response.data)
        console.log("Blogs set successfully")
      }
    } catch (error) {
      setBlogs([])
      console.log(error)
    }
  }
  useEffect(()=>{
    handleBlogs();
  },[])

  const handleAppointments = async()=>{
    try {
      const response = await axios.get("http://192.168.1.10:5000/user/manageAppointments")
      if(response.status===200)
      {
        setManageAppointment(response.data)
        console.log("Appointments set successfully")
      }
    } catch (error) {
      setManageAppointment([])
      console.log("Error in appointments")
    }
  }
  useEffect(()=>{
    handleAppointments();
  })

  return (
    <>
    <div className='outer-container-admin'>

      <div className='left-innercontainer'>
        <button onClick={()=>{setTab(1)}} className='button-section'>Blog Section</button>
        <button onClick={()=>{setTab(2)}} className='button-section'>Manage Appointments</button>
      </div>
      <div className='right-innercontainer'>
        {tab === 1 && <div className='form-container'>
          <div className='blog-title-section'>
            <p className='blog-title'>Enter Blog Title</p>
            <input type='text' value={title} onChange={handleTitle} placeholder='Title...' className='blog-input'/>
          </div>
          <div className='blog-title-section'>
            <p className='blog-title'>Enter Blog Description</p>
            <textarea rows={9} value={description} onChange={handleDescription} placeholder='Description...' className='blog-input'/>
          </div>
          <div className='blog-title-section'>
            <p className='blog-title'>Upload File</p>
            <input onChange={handleFileChange} style={{marginBottom:5}} type='file' accept="image/jpeg, image/png" className='blog-input'/>
          </div>
          <div>
            <button style={{backgroundColor:'rgb(24, 61, 61)', border:"2px solid black", color:"white", marginBottom:5}} onClick={handleSubmit}>Submit</button>
          </div>
          <div className='blog-information'>
            <h2>Blog Entries</h2>
            <div className='blog-entries'>
            {blogs.map((blog,index)=>(
              <div className='entry-by-row'>
                <div className='rows-partition'>{blog.title}</div>
                <div className='rows-partition'>{blog.description.slice(0,25)}...</div>
                <div className='rows-partition'>
              <img height={100} width={"100%"} style={{objectFit:"cover"}} src={blog.blogPicture==null? NoImage :`data:image/jpeg;base64,${blog.blogPicture}`} alt={blog.title}  /></div>
              <div className='rows-partition'><button className='remove-button' onClick={()=>deleteBlogById(blog._id)}>Remove</button></div>
              </div>
            ))}

            </div> 

          </div>
          </div>}
        {tab === 2 && <div className='appointment-container'>
          
          {manageAppointment.map((appointment=>(
            <div className='appoint-info'>
            <p>Name {appointment.name}</p>
            <p>Email {appointment.email}</p>
            <p>Phone Number {appointment.whatsApp}</p>
            <p>Address {appointment.address}</p>
            <p>Ap Date {appointment.appointmentDate}</p>
            <p>Phone Number {appointment.channelSelection}</p>
            <p>Name</p>
            <p>Email</p>
            <p>Phone Number</p>
          </div>
              // <p>{appointment.name} {appointment.email} {appointment.whatsApp} {appointment.appointmentDate.slice(0,10)} </p>
            )))
          }
          </div>}
      </div>
    </div>
    </>
  )
}

export default AdminDashboard




