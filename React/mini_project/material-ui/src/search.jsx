import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./search.css";
import { useState } from 'react';

export default function Search({ onCitySearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onCitySearch(city);
    setCity("");
  };

  return (
    <div className='searchcon'>
      <h1>Search For Weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br /><br />
        <Button variant="contained" type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
}
