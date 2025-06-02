import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const cache = {};

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    const cacheKey = inputValue.toLowerCase();
    if (cache[cacheKey]) {
      return cache[cacheKey];
    }
  
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const data = await response.json();
  
      if (!data || !data.data) {
        return { options: [] }; // Handle empty data or unexpected response
      }
  
      const options = {
        options: data.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        })),
      };
  
      cache[cacheKey] = options;
      return options;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return { options: [] }; // Return empty options array on fetch error
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
