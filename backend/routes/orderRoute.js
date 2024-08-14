import express from "express";
import authMiddelware from "../middleware/auth.js";
import { placeOrder, userOrders, verifyOrder } from "../controllers/orderController.js";


const orderRouter=express.Router();

orderRouter.post("/place",authMiddelware,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddelware,userOrders)

export default orderRouter;