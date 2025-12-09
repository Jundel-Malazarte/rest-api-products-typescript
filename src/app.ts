import express from "express"
import * as dotevnv from "dotenv" // Typo: Should be 'dotenv'
import cors from "cors"
import helmet from "helmet"
import { userRouter } from "./users/users.routes"
import { productRouter } from "./products/products.routes"
import mysql from "mysql" 

// --- START: Critical Correction Area ---

// 1. Load environment variables FIRST
dotevnv.config() // Assuming the path to .env is correct

// 2. Define PORT with a strong fallback
// The !! check is no longer needed. Use a default port like 3000 if process.env.PORT is undefined or fails to parse.
// We use 8080 or 3000 as common defaults.
const DEFAULT_PORT = 3000; 

const PORT = parseInt(process.env.PORT as string, 10) || DEFAULT_PORT;

// Optional: Inform the user if the default was used
if (PORT === DEFAULT_PORT && !process.env.PORT) {
    console.log(`Warning: process.env.PORT not found. Using default port: ${DEFAULT_PORT}`);
}

// --- END: Critical Correction Area ---

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(helmet())

app.use('/', userRouter)
app.use('/', productRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})