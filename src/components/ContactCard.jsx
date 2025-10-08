import React from "react"


export const ContactCard= (props)=>{
    return(
        <div className="card" style={{width: "18 rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.phone}</p>
     <p className="card-text">{props.email}</p>
      <p className="card-text">{props.address}</p>
    <a href="#" className="btn btn-warning">Contact Details</a>
  </div>
</div>
    )
}