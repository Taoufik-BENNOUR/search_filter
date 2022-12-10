import express from "express";
import {users} from "./dummyData.js"
import cors from "cors";
const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    const keys = ["name","username","email"]
    const {query} = req.query;
    const search = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(query))
        );
      };
    //const users = User.find({$regex:q})
      query?res.json(search(users)):res.json(users)
})


app.listen(5000,()=>{
    console.log("connected");
})