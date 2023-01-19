import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const url = "https://yahoo-weather5.p.rapidapi.com/weather";

  const options = {
    params: { location: city, format: "json", u: "c" },
    headers: {
      "X-RapidAPI-Key": "85014b4612msh93b17daeb881a0fp1a4cdejsn73e5031d26ac",
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  const getData = () => {
    axios
      .get(url, options)
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
    setCity("");
  };
  return (
    <div className="App">
      <header>
        <h1>Weather app!</h1>
        <div className="input-box">
          <input
            placeholder="Input City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <button onClick={getData}>Find</button>
        </div>
      </header>
      <main>
        <div className="info">
          <div className="name">
            <h3>
              City: <span>{data.location?.city}</span>
            </h3>
            <h3>
              country: <span>{data.location?.country}</span>{" "}
            </h3>
          </div>
          <div className="condition">
            <h3>Condition: {data.current_observation?.condition.text}</h3>
            <h3>
              Temperature: {data.current_observation?.condition.temperature} C
            </h3>
          </div>
          <div className="other-stuff">
            <h3>
              humidity: {data.current_observation?.atmosphere?.humidity} %
            </h3>
            <h3>speed: {data.current_observation?.wind?.speed} Mph</h3>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
