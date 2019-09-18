import React from "react";

function AuthorDetailComponent(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={props.author.imageUrl}
            alt={props.author.first_name + " " + props.author.last_name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>
              {props.author.first_name + " " + props.author.last_name}
            </span>
          </h5>
          <small className="card-text">
            {props.author.books.length} books
      </small>
        </div>
      </div>
    </div>
  )
}
export default AuthorDetailComponent;