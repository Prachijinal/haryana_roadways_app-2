function BusCard({ bus }) {
  return (
    <div
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

      <p>
        🕒 Time: {bus.time}
      </p>

      <p>
        🚌 Bus Type: {bus.type}
      </p>
    </div>
  );
}

export default BusCard;