import { useState } from "react";
import "./app.css";
import { users } from "./dummyData";
import Table from "./Table";

function App() {
  const [filter, setfilter] = useState("");

const keys =["name","username","email"]
      //user["name"]=value
  const handleFilter = (data)=>{ 
    return data.filter(user=>keys.some(key=>user[key].toLowerCase().includes(filter.toLocaleLowerCase())))
  }

  return (
    <div className="app">
      <div className="container">
      <input type={"text"} placeholder="search" className="search" onChange={(e)=>setfilter(e.target.value)} />
      <Table users={handleFilter(users)} />
      </div>
    </div>
  );
}

export default App;
