import express from "express"
import {v4 as uuid} from "uuid"
import userRouter from "./routes/useres.routes"

const app = express()

app.use(express.json())


const port = 3000


app.use("/users", userRouter)


app.get("/",(r1,res) =>{
    res.send("Hello, express")

})
app.listen(port, () =>{
    console.log(`App rodando na porta ${port}`)
})