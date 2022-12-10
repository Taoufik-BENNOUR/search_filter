import { useEffect, useState } from "react";
import "./app.css";
import Table from "./Table";
import axios from "axios"
function App() {
  const [filter, setfilter] = useState("");
  const [data, setdata] = useState([])
  useEffect(() => {
    const fetchData = async()=>{
      const response = await axios.get(`http://localhost:5000/?query=${filter}`)
      setdata(response.data)
    }
    fetchData()
  }, [filter])
  return (
    <div className="app">
      <div className="container">
      <input type={"text"} placeholder="search" className="search" onChange={(e)=>setfilter(e.target.value)} />
      <Table users={data} />
      </div>
    </div>
  );
}

export default App;
