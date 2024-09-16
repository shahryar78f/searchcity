import { useState } from 'react';

function CitySearch() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [autoComplete, setAutoComplete] = useState(''); // برای تکمیل خودکار

  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // فیلتر شهرها بر اساس ورودی
    const filteredCities = cities.filter(city =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestions(filteredCities);

    if (filteredCities.length > 0) {
      // پیشنهاد تکمیل خودکار: نمایش اولین شهر در لیست فیلتر شده
      setAutoComplete(filteredCities[0]);
    } else {
      setAutoComplete(''); // اگر شهر پیشنهادی وجود نداشت، پاک شود
    }
  };

  return (
    <div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <input 
          type="text" 
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter city name" 
          style={{ border: '2px solid pink', padding: '8px', borderRadius: '4px', width: '200px' }}
        />
        {/* نمایش پیشنهاد تکمیل خودکار */}
        {autoComplete && inputValue && (
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              pointerEvents: 'none', 
              color: 'gray', 
              opacity: 0.5, 
              padding: '8px', 
              borderRadius: '4px', 
              width: '200px',
              fontFamily: 'inherit' 
            }}
          >
            <span style={{ color: 'black', opacity: 1 }}>
              {inputValue}
            </span>
            <span>
              {autoComplete.substring(inputValue.length)}
            </span>
          </div>
        )}
      </div>

      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {suggestions.map((city, index) => (
          <li key={index} style={{ backgroundColor: 'lightgray', padding: '8px', marginTop: '4px', borderRadius: '4px' }}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitySearch;