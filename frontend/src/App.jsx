import { useState } from "react";

function App() {

  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [results, setResults] = useState([]);

  const buses = [
    {
      from: "Rohtak",
      to: "Chandigarh",
      time: "6:30 AM",
      type: "AC",
    },
    {
      from: "Rohtak",
      to: "Delhi",
      time: "8:00 AM",
      type: "Ordinary",
    },
    {
      from: "Panipat",
      to: "Chandigarh",
      time: "9:15 AM",
      type: "Volvo",
    },
    {
      from: "Rohtak",
      to: "Chandigarh",
      time: "1:00 PM",
      type: "Ordinary",
    },
  ];

  function handleSearch() {

    const filteredBuses = buses.filter(
      (bus) =>
        bus.from.toLowerCase() === fromCity.toLowerCase() &&
        bus.to.toLowerCase() === toCity.toLowerCase()
    );

    setResults(filteredBuses);
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

      <div style={{ marginTop: "30px" }}>

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

      <div style={{ marginTop: "40px" }}>

        {results.length > 0 ? (

          results.map((bus, index) => (

            <div
              key={index}
              style={{
                border: "1px solid gray",
                width: "400px",
                margin: "20px auto",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3>
                {bus.from} → {bus.to}
              </h3>

              <p>
                Time: {bus.time}
              </p>

              <p>
                Bus Type: {bus.type}
              </p>

            </div>
          ))

        ) : (

          <p>No buses found</p>

        )}

      </div>

    </div>
  );
}

export default App;