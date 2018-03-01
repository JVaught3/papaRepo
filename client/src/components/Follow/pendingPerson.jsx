import React from 'react';

// Rendering Pending Person

const pendingPerson = ({ person, stop }) => (
  <div>
    {person}
    <input
      type="button"
      value="Delete Following"
      onClick={() => {
        stop(person);
      }}
    />
  </div>
);

export default pendingPerson;
