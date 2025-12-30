import { useState } from "react";

export default function Weather() {
    let [city, setCity] = useState("");
    let [temperature, setTemperature] = useState("");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");

    async function getweather() {
        if (!city.trim()) {
            alert("Please enter a city name");
            return;
        }

        setLoading(true);
        setError("");
        setTemperature("");

        try {
            // 1st API: Get latitude & longitude
            let res1 = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
            if (!res1.ok) throw new Error("Failed to fetch location");
            let data = await res1.json();

            if (!data.results || data.results.length === 0) {
                setError("City not found!");
                setLoading(false);
                return;
            }

            // 2nd API: Get temperature
            let res2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.results[0].latitude}&longitude=${data.results[0].longitude}&current=temperature_2m`);
            if (!res2.ok) throw new Error("Failed to fetch weather data");
            let data2 = await res2.json();

            if (!data2.current || data2.current.temperature_2m === undefined) {
                setError("Weather data not available");
            } else {
                setTemperature(data2.current.temperature_2m);
            }

        } catch (err) {
            console.error(err);
            setError("Error fetching data. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f8ff",
            fontFamily: "Arial, sans-serif"
        }}>
            <div style={{
                padding: "30px",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                width: "90%",
                maxWidth: "400px",
                textAlign: "center"
            }}>
                <h1 style={{ marginBottom: "20px", color: "black" }}>🌤️ Weather Info</h1>

                <input
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                        height: "35px",
                        width: "100%",
                        padding: "0 10px",
                        marginBottom: "20px",
                        borderRadius: "5px",
                        border: "1px solid #ccc"
                    }}
                    placeholder="Enter city name"
                    type="text"
                    value={city}
                />
                <br />

                <button
                    onClick={getweather}
                    style={{
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "#4caf50",
                        color: "white",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}
                >
                    Get Temperature
                </button>

                {/* Loading Text */}
                {loading && <p style={{ marginTop: "20px", color: "#555" }}>Loading...</p>}

                {/* Error Message */}
                {error && <p style={{ marginTop: "20px", color: "red" }}>{error}</p>}

                {/* Temperature Data */}
                {temperature !== "" && !loading && !error && (
                    <h2 style={{ marginTop: "25px", color: "#333" }}>
                        🌡️ Temperature: {temperature}°C
                    </h2>
                )}
            </div>
        </div>
    );
}
