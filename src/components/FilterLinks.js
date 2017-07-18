import React from 'react';
import Link from './Link';

const FilterLinks = ({activeFilter}) => {
  return (
    <div>
      <Link />
      <Link />
      <Link />
      <input type="button" className="btn btn-primary" value="Help" />
    </div>
  );
}

export default FilterLinks;
