import React, { useContext } from 'react';
import { AutoCompleteContext } from '../contexts/AutoCompleteContext';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import { LocationContext } from '../contexts/LocationContext';
import { Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';

const AutoComplete = () => {

  const { address, updateAddress } = useContext(AutoCompleteContext);
  const { updateLocation } = useContext(LocationContext)

  const handleSelect = address => {
    updateAddress(address)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => updateLocation({
        latitude: latLng.lat, longitude: latLng.lng
      }))
      .catch(error => console.error('Error', error));
  };

  return (
    <Col md="7" lg="7" sm="7" xs="7">
      <PlacesAutocomplete
        value={address}
        onChange={updateAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">

                <i className=" fa fa-search" style={{ "fontSize": "1.5em" }} aria-hidden="true"></i>
              </InputGroupAddon>
              <Input {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })} />

            </InputGroup>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </Col>
  );
}

export default AutoComplete;
