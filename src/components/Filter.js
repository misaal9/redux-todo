import React from 'react';

const Filter = ({label, activeFilter, setFilter}) => {
  let className = `btn btn-default ${label === activeFilter ? 'active' : ''}`;
  return (
    <button type="button" className={className} onClick={() => setFilter(label)}>{label}</button>
  );
}

export default Filter;
