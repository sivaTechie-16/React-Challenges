/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from 'react';

const  Todo = ()=> {
  const [cities, setCities] = useState<string[]>([]);
  const [newCity, setNewCity] = useState<string>('');

  const handleInputChange = (e:any) => {
    setNewCity(e.target.value);
  };

  const handleAddCity = () => {
    if (newCity) {
      setCities([...cities, newCity]);
      setNewCity(''); 
    }
  };

  const handleRemoveCity = (cityToRemove: string) => {
    const updatedCities = cities.filter((city) => city !== cityToRemove);
    setCities(updatedCities);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Todo: Add Cities</h2>
      
      <input 
        type="text"
        value={newCity}
        onChange={handleInputChange}
        placeholder="Enter city name"
      />
      
      <button onClick={handleAddCity}>Add City</button>
      
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            {city} 
            <button onClick={() => handleRemoveCity(city)} style={{backgroundColor:'red'}}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
