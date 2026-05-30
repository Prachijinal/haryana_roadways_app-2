function SearchBar({
  fromCity,
  toCity,
  setFromCity,
  setToCity,
  handleSearch,
}) {
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
          value={fromCity}
          onChange={(e) =>
            setFromCity(e.target.value)
          }
          style={{
            padding: "12px",
            width: "260px",
            marginRight: "10px",
            borderRadius: "8px",
            border: "1px solid gray",
          }}
        />

        <input
          type="text"
          placeholder="Enter Destination City"
          value={toCity}
          onChange={(e) =>
            setToCity(e.target.value)
          }
          style={{
            padding: "12px",
            width: "260px",
            borderRadius: "8px",
            border: "1px solid gray",
          }}
        />
      </div>

      <button
        onClick={handleSearch}
        style={{
          marginTop: "25px",
          padding: "12px 30px",
          backgroundColor: "green",
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