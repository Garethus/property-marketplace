import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROPERTY } from '../utils/queries';

const SingleProperty = () => {
  // Use `useParams()` to retrieve value of the route parameter `:propertyId`
  const { propertyId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROPERTY, {
    // pass URL parameter
    variables: { propertyId: propertyId },
  });

  const property = data?.property || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <div className="card-body bg-light p-2">
        <p>{property.image}</p>
      </div>
      <h4 className="card-header bg-primary text-light p-2 m-0">

          {property.street}, {property.suburb}, {property.state}, {property.postcode} <br />
          <span style={{ fontSize: '1rem' }}>
            Bed:{property.bed} Bathroom:{property.bathroom} Car:{property.car} Landsize:{property.landsize} <br />
            Price: ${property.price} <br />
            {property.type} <br />
            {property.category}
          </span>

      </h4>
      <div>


          Save this Property.

      </div>
    </div>


  );
};

export default SingleProperty;
