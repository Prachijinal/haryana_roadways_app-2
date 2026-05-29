import { useState } from "react";

function App() {

  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");

  function handleSearch() {
    alert(`Searching buses from ${fromCity} to ${toCity}`);
  }

  return (
    <div
      style={{
        fontFamily: "Arial",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1 style={{ color: "green" }}>
        Haryana Roadways
      </h1>

      <p>
        Search Bus Routes and Timings
      </p>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Starting City"
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            marginRight: "10px",
            borderRadius: "5px",
          }}
        />

        <input
          type="text"
          placeholder="Enter Destination City"
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "5px",
          }}
        />
      </div>

      <button
        onClick={handleSearch}
        style={{
          marginTop: "20px",
          padding: "10px 25px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search Buses
      </button>
    </div>
  );
}

export default App;