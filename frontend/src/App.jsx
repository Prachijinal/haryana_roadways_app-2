import { useState, useEffect } from "react";
import BusCard from "./components/BusCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [results, setResults] = useState([]);
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/buses")
      .then((response) => response.json())
      .then((data) => {
        setBuses(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSearch() {

  console.log("All Buses:", buses);

  const filteredBuses = buses.filter(
    (bus) =>
      bus.from.toLowerCase() === fromCity.toLowerCase() &&
      bus.to.toLowerCase() === toCity.toLowerCase()
  );

  console.log("Filtered:", filteredBuses);

  setResults(filteredBuses);
}

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
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
          color: "#444",
        }}
      >
        Search Bus Routes and Timings Easily
      </p>

      <SearchBar
        fromCity={fromCity}
        toCity={toCity}
        setFromCity={setFromCity}
        setToCity={setToCity}
        handleSearch={handleSearch}
      />

      <div
        style={{
          marginTop: "50px",
        }}
      >
        {results.length > 0 ? (
          results.map((bus, index) => (
            <BusCard
              key={index}
              bus={bus}
            />
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