import React from "react"
import './home.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import samimg1 from '../../image/booksam1.jpeg'
import samimg2 from '../../image/booksam2.jpeg'
import {Redirect,useHistory } from 'react-router-dom'

const Homepage = () => {
        const history= useHistory();
    return(
        <div className="page-main">
        <div className="home-main">
            <div className="navbar-sec">
                <h2>SYNERGY</h2>
                <SearchOutlinedIcon style={{height:"35px",width:"43px",color:"white",marginLeft:"90%",marginTop:"0px"}}/>
                <MenuTwoToneIcon/>   
            </div>
            <div className="quote-sec">
            <h2>A writer only<br/>
            begins a book. <br/>
            A reader <br/>
            finishes it..
            </h2>
            <h5>--SAMUEL JHONSON</h5>
            </div>
            <div className="home-sign-btn">
                <h2>Sign Up</h2>
            </div> 
            </div>
            <div className="home-content-sec">
                
                <div className="card-main">
                    <div className="card-img">
                        <img src={samimg1}/>
                    </div>
                    <h2>HEADING</h2>
                    <h5>vaisakh is a very much bloody fool..
                    , Lorem ipsum is a placeholder text commonly
                     used to demonstrate the visual form of a document or a typeface
                    </h5>
                    <h6>20/40/8080</h6>
                    <div className="home-readmore-btn">
                    <h2 onClick={()=> history.push('/posts')}>Read More..</h2>
                </div>
                </div>

                <div className="card-main" >
                    <div className="card-img">
                        <img src={samimg2}/>
                    </div>
                    <h2>HEADING</h2>
                    <h5>vaisakh is a very much bloody fool..
                    , Lorem ipsum is a placeholder text commonly
                     used to demonstrate the visual form of a document or a typeface
                    </h5>
                    <h6>20/40/8080</h6>
                    <div className="home-readmore-btn">
                    <h2 onClick={()=> history.push('/posts')}>Read More..</h2>
                </div>
                </div>

                <div className="card-main">
                    <div className="card-img">
                        <img src={samimg2}/>
                    </div>
                    <h2>HEADING</h2>
                    <h5>vaisakh is a very much bloody fool..
                    , Lorem ipsum is a placeholder text commonly
                     used to demonstrate the visual form of a document or a typeface
                    </h5>
                    <h6>20/40/8080</h6>
                    <div className="home-readmore-btn">
                    <h2 onClick={()=> history.push('/posts')}>Read More..</h2>
                </div>
                </div>

                <div className="card-main">
                    <div className="card-img">
                        <img src={samimg2}/>
                    </div>
                    <h2>HEADING</h2>
                    <h5>vaisakh is a very much bloody fool..
                    , Lorem ipsum is a placeholder text commonly
                     used to demonstrate the visual form of a document or a typeface
                    </h5>
                    <h6>20/40/8080</h6>
                    <div className="home-readmore-btn">
                    <h2 onClick={()=> history.push('/posts')}>Read More..</h2>
                </div>
                </div>
            

                <div className="home-footer">
                    <div className="footer-card">

                    </div>
                    
                    <div className="footer-card">

                    </div>

                    <div className="footer-card">

                    </div>

                        <h5>copyright@2021.Design by CKSS</h5>
                   
                </div>

                
            </div>
           
            </div>
                
    
    )
}

export default Homepage;