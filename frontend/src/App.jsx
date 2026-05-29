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
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        paddingTop: "50px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >

      <h1
        style={{
          color: "green",
          fontSize: "42px",
        }}
      >
        Haryana Roadways
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#01301d",
        }}
      >
        Search Bus Routes and Timings Easily
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
            padding: "12px",
            width: "260px",
            marginRight: "10px",
            borderRadius: "8px",
            border: "1px solid gray",
            fontSize: "16px",
          }}
        />

        <input
          type="text"
          placeholder="Enter Destination City"
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
          style={{
            padding: "12px",
            width: "260px",
            borderRadius: "8px",
            border: "1px solid gray",
            fontSize: "16px",
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
          fontSize: "16px",
        }}
      >
        Search Buses
      </button>

      <div
        style={{
          marginTop: "50px",
        }}
      >

        {results.length > 0 ? (

          results.map((bus, index) => (

            <div
              key={index}
              style={{
                backgroundColor: "white",
                width: "420px",
                margin: "20px auto",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >

              <h2 style={{ color: "green" }}>
                {bus.from} → {bus.to}
              </h2>

              <p style={{ fontSize: "18px" }}>
                🕒 Time: {bus.time}
              </p>

              <p style={{ fontSize: "18px" }}>
                🚌 Bus Type: {bus.type}
              </p>

            </div>

          ))

        ) : (

          <p
            style={{
              marginTop: "30px",
              color: "gray",
              fontSize: "18px",
            }}
          >
            No buses found
          </p>

        )}

      </div>

    </div>
  );
}

export default App;