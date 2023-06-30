import React, { useState } from 'react';

const CascadingDropdowns = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleCountryChange = (e) => {
    const { value } = e.target;
    setSelectedCountry(value);
    setSelectedState('');
    setSelectedCity('');
  };

  const handleStateChange = (e) => {
    const { value } = e.target;
    setSelectedState(value);
    setSelectedCity('');
  };

  const handleCityChange = (e) => {
    const { value } = e.target;
    setSelectedCity(value);
  };

  const getStatesByCountry = () => {
    const country = data.find((item) => item.name === selectedCountry);
    return country ? country.states : [];
  };

  const getCitiesByState = () => {
    const country = data.find((item) => item.name === selectedCountry);
    if (country) {
      const state = country.states.find((item) => item.name === selectedState);
      return state ? state.cities : [];
    }
    return [];
  };

  return (
    <div>
      <h1>Cascading Dropdowns</h1>
      <label>
        Select Country:
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">-- Select Country --</option>
          {data.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </label>

      {selectedCountry && (
        <label>
          Select State:
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">-- Select State --</option>
            {getStatesByCountry().map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </label>
      )}

      {selectedState && (
        <label>
          Select City:
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">-- Select City --</option>
            {getCitiesByState().map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
      )}

      {selectedCity && (
        <p>
          Selected Country: {selectedCountry}, Selected State: {selectedState}, Selected City: {selectedCity}
        </p>
      )}
    </div>
  );
};

export default CascadingDropdowns;
/*
n this example, the CascadingDropdowns component accepts a data prop, which should be an array of objects representing countries, states, and cities. Each object should have a name property representing the country name and a states property, which is an array of objects representing states. Each state object should have a name property representing the state name and a cities property, which is an array of city names.

The component maintains three state variables: selectedCountry, selectedState, and selectedCity, to track the selected values.

The handleCountryChange function is called when the country dropdown value changes. It updates the selectedCountry state with the new value and resets the selectedState and selectedCity states to an empty string.
*/
