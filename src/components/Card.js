import React from 'react';

function Card({ data }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">
            {data.description}
          </p>
          <a href="#" className="btn btn-primary">More details</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
