import express from "express";
import cors from "cors";
import cookieParcer from "cookie-parser"

const app = express();
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credential : true,
}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true, limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParcer())


export { app }