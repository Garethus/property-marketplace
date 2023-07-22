import React from 'react';
import { useQuery } from '@apollo/client';

import PropertyList from '../components/PropertyList';
import SearchForm from '../components/SearchForm';

import { QUERY_PROPERTIES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROPERTIES);
  const properties = data?.properties || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <SearchForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PropertyList
              properties={properties}
              title="Current Property Listings"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
