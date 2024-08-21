import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config.js' 
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


//app config
const app=express()

const port=process.env.PORT;


//middleware
app.use(express.json())
app.use(cors())

//db connections
connectDB();

//api end Points
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get("/" ,(req,res)=>{
    res.send("API Working")
})

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 4000;
    app.listen(port,()=>{
        console.log(`Server started on http://localhost:${port}`)
    })
}

export default app;

