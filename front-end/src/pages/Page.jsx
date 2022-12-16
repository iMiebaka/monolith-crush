import { useContext } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";
import { Counter } from "../context/Counter";
import { useEffect } from "react";
import { api } from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Page() {
  const { count, setCount } = useContext(Counter);
  const [serverData, setServerData] = useState("");
  const { id } = useParams();


  useEffect(() => {
    api
      .get("/api/v1/" + id)
      .then((res) => {
        console.log(res);
        setServerData(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Page {id}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">{serverData}</p>
    </div>
  );
}

export default Page;
