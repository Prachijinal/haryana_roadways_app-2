function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "green" }}>
        Haryana Roadways
      </h1>

      <p>
        Find Bus Routes and Timings Easily
      </p>

      <button
        style={{
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