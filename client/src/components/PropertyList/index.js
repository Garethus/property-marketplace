import React from 'react';
import { Link } from 'react-router-dom';

const PropertyList = ({
  properties,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!properties.length) {
    return <h3>No Properties Posted Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {properties &&
        properties.map((property) => (
          <div key={property._id} className="card mb-3">
            <div className="">
              <div className="card-body bg-light p-2">
                <p>{property.image}</p>
              </div>
              <h4 className="card-header bg-primary text-light p-2 m-0">
                <Link
                  className="text-light"
                  to={`/properties/${property.propertyId}`}
                >
                  {property.street}, {property.suburb}, {property.state}, {property.postcode} <br />
                  <span style={{ fontSize: '1rem' }}>
                    Bed:{property.bed} Bathroom:{property.bathroom} Car:{property.car} Landsize:{property.landsize} <br />
                    Price: ${property.price} <br />
                    {property.type} <br />
                    {property.category}
                  </span>
                </Link>
              </h4>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/properties/${property._id}`}
            >
              Save this Property.
            </Link>
          </div>
        ))
      }
    </div >
  );
};

export default PropertyList;
