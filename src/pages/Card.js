import React from "react";

const Card=({title="Card1", organisation="MLH", organiser="XYZ",date="today",time="5:00pm",venue="online", but="Details"})=>{
    return(
        <div className="card text-center" style={{width: "18rem", margin:"15px 8px"}}>
          <img
            src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg"
            className="card-img-top"
            alt="Event Image"
          />
          <div className="card-body" style={{background: "linear-gradient(to top, #EFF54D, #FF9347)"}}>
            <p>{organisation} presents</p>
            <h5 className="card-title">{title}</h5>
            <p>By {organiser}</p>
            <h6>on {date} at {time}</h6>
            <p>{venue}</p>
            <a href="#" className="btn btn-success">{but}</a>
          </div>
        </div>
    )
};

export default Card
