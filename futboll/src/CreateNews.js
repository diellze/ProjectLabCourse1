import React, { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from 'axios';

function CreateNews() {

  const[image, setImage] = useState("");
  const[name, setName] = useState("");
  const[details, setDetails] = useState("");
  const[news, setNews] = useState([]);

  const url = "http://localhost:7020/api";
  const handleSubmit = (e) =>{
   //  alert(image + "" + details +""+name)
   const data = {

    Image : image,
    Name : name,
    Details : details,
    Type: "Add"

   }
   axios
    .post(`${url}/News`, data)
    .then((json) => {
        clear();
        getNews();
    })
    .catch((error) =>{
      console.log(error);
    })

  }

  const getNews = () =>{
    axios.get(`${url}/News`)
    .then((json) => {
        setNews(json.data.News);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() =>{
    getNews();
  },[])

  const clear = () => {
      setImage("")
      setName("")
      setDetails("")
  }


    return (
      <Fragment>
        <div style={{margin:"0 auto", margin:"50px"}}>
          <input type="text" value={image} placeholder="Enter image" onChange={(e) => setImage(e.target.value)}/>
          <br></br>
          <input type="text" value={name} placeholder="Enter image" onChange={(e) => setName(e.target.value)}/>
          <br></br>
          <input type="text" value={details} placeholder="Enter image" onChange={(e) => setDetails(e.target.value)}/>
          <button onClick={(e) => handleSubmit(e)} >Submit</button>
        </div>

        <br></br>
        <table style={{width:"500px", backgroundColor:"orange", margin: "0 auto"}}>
          <thead>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Details</th>
            <th colSpan={2}>Action</th>
          </thead>
          <tbody>
            {
              news && news.map((emp, index)=>{
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{emp.Image}</td>
                    <td>{emp.Name}</td>
                    <td>{emp.Details}</td>
                    <td>
                      <button >Edit</button>
                    </td>
                    <td>
                      <button >Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </Fragment>
    )


}

export default CreateNews;