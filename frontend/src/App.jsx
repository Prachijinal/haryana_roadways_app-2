import { useState, useEffect } from "react";
import BusCard from "./components/BusCard";
import SearchBar from "./components/SearchBar";
import AddBus from "./components/AddBus";

function App() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [results, setResults] = useState([]);
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/buses")
      .then((response) => response.json())
      .then((data) => {
        setBuses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const cities = [...new Set(
    buses.flatMap(bus => [bus.source, bus.destination])
  )];

  async function handleDeleteBus(id) {
    try {
      await fetch(`http://localhost:5000/api/buses/${id}`, {
        method: "DELETE",
      });

      setBuses((prevBuses) =>
        prevBuses.filter((bus) => bus._id !== id)
      );

      setResults((prevResults) =>
        prevResults.filter((bus) => bus._id !== id)
      );

      alert("Bus Deleted Successfully!");
    } catch (error) {
      console.log(error);
      alert("Failed to delete bus");
    }
  }

  function handleSearch() {


    console.log("All Buses:", buses);

    setSearched(true);
    const filteredBuses = buses.filter(
      (bus) =>
        bus.source.toLowerCase() === fromCity.toLowerCase() &&
        bus.destination.toLowerCase() === toCity.toLowerCase()
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
        cities={cities}
      />

      <AddBus />

      <div style={{ marginTop: "50px" }}>

        {loading ? (

          <p>Loading buses...</p>

        ) : results.length > 0 ? (

          results.map((bus) => (
            <BusCard
              key={bus._id}
              bus={bus}
              onDelete={handleDeleteBus}
            />
          ))

        ) : searched ? (

          <p
            style={{
              color: "red",
              fontSize: "18px",
            }}
          >
            No buses found for this route.
          </p>

        ) : null}

      </div>
    </div>
  );
}

export default App;