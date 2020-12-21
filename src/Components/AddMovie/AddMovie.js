
import React, { useState } from "react";
import Modal from "react-modal";
import ReactDOM from 'react-dom';
import '../AddMovie/Addmovie.css'


Modal.setAppElement('#root');

const AddMovie = ({ addmovie }) =>{
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");


    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
         };
       
   const closeModal = () => {
       setIsOpen(false);
         }; 
    
   const handelSubmit =()=>{
       
    let newmovie ={
        name,
        image,
        rating,
        description,
        date,
        type,
    }
    addmovie(newmovie);//relating the new movie to the List
    setIsOpen(false);//closing modal after using
    setName('');//Reseting all the input
    setImage('');
    setRating(0);
    setDescription('');
    setDate('');
    setType('');
   };
    
    return(

        <div>
      <div className="Add-btn-container">
        <button className="Add-btn" onClick={openModal}>
          +
        </button>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label>Movie Name</label>
            <input 
              type="text"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}/>
            <label>Movie Rate</label>
            <div className="rating-search">
              
            </div>
            <input
                type="number"
                name="rating"
                value={rating}
                required
                min='1'
                max='5'
                onChange={(e) => setRating(e.target.value)}
            />
            <label>Movie Release Date</label>
            <input 
                type="number"
                name="date"
                value={date}
                required
                onChange={(e) => setDate(e.target.value)}/>
            <label>Movie Image</label>
            <input
                type="url"
                name="image"
                value={image}
                required
                onChange={(e) => setImage(e.target.value)}/>
            <label>Movie Type</label>
            <input 
                type="text"
                name="type"
                value={type}
                required
                onChange={(e) => setType(e.target.value)}/>
            <label>Movie Summary</label>
            <textarea 
                type="text"
                name="description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}/>
          </form>
          <button className="Modal-btn" onClick={handelSubmit}>
            Submit
          </button>
          <button className="Modal-btn" onClick={closeModal}>
            close
          </button>
        </Modal>
      </div>
    </div>


    );
};
export default AddMovie;