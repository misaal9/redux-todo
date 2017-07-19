import React from 'react';
import Filter from './Filter';

import { FILTER } from '../actions'

const FilterLinks = ({activeFilter, setFilter}) => {
  return (
    <div className="btn-group">
      <Filter activeFilter={activeFilter} label={FILTER.SHOW_ALL} setFilter={setFilter.setFilter}/>
      <Filter activeFilter={activeFilter} label={FILTER.SHOW_C} setFilter={setFilter.setFilter}/>
      <Filter activeFilter={activeFilter} label={FILTER.SHOW_IC} setFilter={setFilter.setFilter}/>
    </div>
  );
}

export default FilterLinks;
