import React from 'react';
import Blogcard from "../blogcard/Blogcard";
import samimg1 from "../../../image/booksam1.jpeg";
import samimg2 from "../../../image/booksam2.jpeg";
import Catagorycard from "../blogcard/Catagorycard"
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import './catagories.css'

const Catagories = ({title}) => {

    return(
        <div className="cata-main">
        <div className="cata-h2">
          <h2>
            
            <ImportContactsIcon />
                 {title} 
          </h2>
        </div>
    <div className="cata-row">
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>
    <Catagorycard samimg={samimg2}/>

        </div>
      </div>
    )
} 


export default Catagories;