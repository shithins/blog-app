import React from 'react';
import Blogcard from "../blogcard/Blogcard";
import samimg1 from "../../../image/booksam1.jpeg";
import samimg2 from "../../../image/booksam2.jpeg";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

const Catagories = ({title}) => {

    return(
        <div className="home-content-sec">
        <div className="home-content-h2">
          <h2>
            
            <ImportContactsIcon />
                 {title} 
          </h2>
        </div>
    
        <Blogcard samimg={samimg1} />
        <Blogcard samimg={samimg1} />
        <Blogcard samimg={samimg1} />
      </div>
    )
} 


export default Catagories;