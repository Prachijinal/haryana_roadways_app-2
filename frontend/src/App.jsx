function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
        fontFamily: "Arial",
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
          placeholder="From"
          style={{
            padding: "10px",
            width: "200px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />

        <input
          type="text"
          placeholder="To"
          style={{
            padding: "10px",
            width: "200px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />
      </div>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
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