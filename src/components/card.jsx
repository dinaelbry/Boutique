import React from "react";

function Card({ name, price, image }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
          <a href="#" className="btn btn-outline-success">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
