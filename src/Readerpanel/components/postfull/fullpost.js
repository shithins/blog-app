import React from 'react';
import './fullpost.css';
import postsam from '../../../image/booksam1.jpeg'
import postsam2 from '../../../image/booksam2.jpeg'

const Postpage = () => {
    return(
        <div className="post-main">
          <div className="post-content-main">
          <img src={postsam}/>
          <h3>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.

Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.[6]
          </h3>
          
          
          </div>
          <div className="sugg-sec">
                <h3>OTHERS FOR YOU</h3>
          <div className="sugg-card">
          <img src={postsam2}/>
          <h5>In publishing and graphic design, 
              Lorem ipsum is a placeholder text commonly used to demonstrate 
              the visual form of a document or a 
              typeface without relying on meaningful content. 
              Lorem ipsum may be used as a placeholder before final copy
               is available. </h5>
          <div className="readmore-btn">
              <h2>Read More..</h2>
          </div>
          </div>

          <div className="sugg-card">
          <img src={postsam2}/>
          <h5>In publishing and graphic design, 
              Lorem ipsum is a placeholder text commonly used to demonstrate 
              the visual form of a document or a 
              typeface without relying on meaningful content. 
              Lorem ipsum may be used as a placeholder before final copy
               is available. </h5>
          <div className="readmore-btn">
              <h2>Read More..</h2>
          </div>
          </div>

          <div className="sugg-card">
          <img src={postsam2}/>
          <h5>In publishing and graphic design, 
              Lorem ipsum is a placeholder text commonly used to demonstrate 
              the visual form of a document or a 
              typeface without relying on meaningful content. 
              Lorem ipsum may be used as a placeholder before final copy
               is available. </h5>
          <div className="readmore-btn">
              <h2>Read More..</h2>
          </div>
          </div>

          <div className="sugg-card">
          <img src={postsam2}/>
          <h5>In publishing and graphic design, 
              Lorem ipsum is a placeholder text commonly used to demonstrate 
              the visual form of a document or a 
              typeface without relying on meaningful content. 
              Lorem ipsum may be used as a placeholder before final copy
               is available. </h5>
          <div className="readmore-btn">
              <h2>Read More..</h2>
          </div>
          </div>

          <div className="sugg-card">
          <img src={postsam2}/>
          <h5>In publishing and graphic design, 
              Lorem ipsum is a placeholder text commonly used to demonstrate 
              the visual form of a document or a 
              typeface without relying on meaningful content. 
              Lorem ipsum may be used as a placeholder before final copy
               is available. </h5>
          <div className="readmore-btn">
              <h2>Read More..</h2>
          </div>
          </div>

          <div className="sugg-card">
          <img src={postsam2}/>
          <h5>In publishing and graphic design, 
              Lorem ipsum is a placeholder text commonly used to demonstrate 
              the visual form of a document or a 
              typeface without relying on meaningful content. 
              Lorem ipsum may be used as a placeholder before final copy
               is available. </h5>
          <div className="readmore-btn">
              <h2>Read More..</h2>
          </div>
          </div>
          
          </div>
        </div>
    )
}

export default Postpage;