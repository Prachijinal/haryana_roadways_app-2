import { useState } from "react";
import BusCard from "./components/BusCard";
import SearchBar from "./components/SearchBar";
import buses from "./data/buses";

function App() {

  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [results, setResults] = useState([]);

  

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