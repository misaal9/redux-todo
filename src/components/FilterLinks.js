import React from 'react';
import Link from './Link';

const FilterLinks = ({activeFilter}) => {
  return (
    <div>
      <Link />
      <Link />
      <Link />
      <div>
        <p>Current state is: {activeFilter}</p>
      </div>
    </div>
  );
}

export default FilterLinks;
