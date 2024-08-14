import express from "express";
import authMiddelware from "../middleware/auth.js";
import { placeOrder } from "../controllers/orderController.js";


const orderRouter=express.Router();

orderRouter.post("/place",authMiddelware,placeOrder)

export default orderRouter;