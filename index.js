import express from "express"
import cors from "cors"
import morgan from "morgan"
import colors from "colors"
import dotenv from "dotenv"
import connectDB from "./dbConnection.js"
import adminRoutes from './routes/adminRoutes.js'


dotenv.config()


connectDB()


const app = express()



app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3003", "https://mainul-portfolio.netlify.app"],
    credentials: true
}))


app.use("/api/v1/portfolio/admin", adminRoutes)


const PORT = process.env.PORT || 1339



app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on PORT ${PORT} `.bgBlue.white)
})
