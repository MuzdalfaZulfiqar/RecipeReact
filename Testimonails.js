import React from "react";
import Slider from "react-slick";
export default function Testimonails(){
    return (
        <div className="chefs-testimonails" id="textCheckID">
        <div className="clientstitle">
          <span>Our Home Recipe Makers say</span>
        </div>
        <div className="client">
          <div className="te test1">           
              <div className="testContent">
                <div className="test1comment">
                  The Tomato soup was one of the best
                </div>
                <div className="test1name-avatar">
                  <img src="avatar1.png" />
                  <span>Riffat Zulfiqar</span>
                </div>
              </div>
            </div>
            <div className="te test2">
            
            <div className="textContent">
              <div className="test2comment">
                "Smash Burger was just great. I cannot even explain that the
                  recipe was so easy. and it was also mentioned in easy steps"
                
              </div>
              <div className="test2name-avatar">
                <img src="avatar2.png" />
                <span>Maryam Zulfiqar</span>
              </div>
            </div>
            
          </div>
          <div className="te test3">
            
            <div className="textContent">
              <div className="test3comment">
                Boiled Egg Pastry is one of the unique flavours i have ever
                tried. Highly recommended. You all should try it.
              </div>
              <div className="test3name-avatar">
                <img src="avatar3.png" />
                <span>Muzdalfa Zulfiqar</span>
              </div>
            </div>
          </div>
          <div className="te test4">
            
            <div className="textContent">
              <div className="test4comment">
                Boiled Egg Pastry is one of the unique flavours i have ever
                tried. Highly recommended. You all should try it.
              </div>
              <div className="test4name-avatar">
                <img src="avatar4.png" />
                <span>Muzdalfa Zulfiqar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}