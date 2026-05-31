function SearchBar({
  fromCity,
  toCity,
  setFromCity,
  setToCity,
  handleSearch,
  cities
}) {

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div>

      <div
        style={{
          marginTop: "30px",
        }}
      >

        <input
          type="text"
          placeholder="Enter Starting City"
          list="fromCities"
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            padding: "12px",
            width: "260px",
            marginRight: "10px",
            borderRadius: "8px",
            border: "1px solid gray",
          }}
        />

        <datalist id="fromCities">
          {cities.map((city, index) => (
            <option
              key={index}
              value={city}
            />
          ))}
        </datalist>

        <input
          type="text"
          placeholder="Enter Destination City"
          list="toCities"
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            padding: "12px",
            width: "260px",
            borderRadius: "8px",
            border: "1px solid gray",
          }}
        />

        <datalist id="toCities">
          {cities.map((city, index) => (
            <option
              key={index}
              value={city}
            />
          ))}
        </datalist>

      </div>

      <button
        onClick={handleSearch}
        style={{
          marginTop: "25px",
          padding: "12px 30px",
          backgroundColor: "rgb(0, 73, 138)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Search Buses
      </button>

    </div>
  );
}

export default SearchBar;