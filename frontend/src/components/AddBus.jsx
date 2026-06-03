import { useState } from "react";

function AddBus() {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");

    async function handleAddBus() {
        try {
            const response = await fetch("http://localhost:5000/api/buses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    source,
                    destination,
                    departureTime,
                    arrivalTime,
                }),
            });

            const data = await response.json();

            console.log("Bus Added:", data);

            setSource("");
            setDestination("");
            setDepartureTime("");
            setArrivalTime("");

            alert("Bus Added Successfully!");
        } catch (error) {
            console.log(error);
            alert("Failed to add bus");
        }
    }

    return (
        <div
            style={{
                backgroundColor: "white",
                width: "450px",
                margin: "30px auto",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
        >
            <h2>Add New Bus</h2>

            <input
                type="text"
                placeholder="Source City"
                value={source}
                onChange={(e) => setSource(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Destination City"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Departure Time"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Arrival Time"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
            />

            <br /><br />

            <button onClick={handleAddBus}>
                Add Bus
            </button>
        </div>
    );
}

export default AddBus;