import { useState } from "react";
import "./app.css";
import { users } from "./dummyData";
function App() {
  const [filter, setfilter] = useState("")

  return (
    <div>
      <input type={"text"} placeholder="search" className="search" onChange={(e)=>setfilter(e.target.value)} />
      <ul className="ul">
        {users.filter(user=>user.username.toLowerCase().includes(filter.toLowerCase())).map((user)=>
          <li className="li" key={user.id}>{user.username}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
