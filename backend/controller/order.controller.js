import { Order } from "../schema/order.schema.js"
import { Product } from "../schema/product.schema.js"

export const createOrderController = async (req,res) => {
    try {
        let data = req.body 
        const order = await Order.create(data)
        let orderQuantity = data.quantity // orderQuantity = 10
        const id = data.productId 
        const product = await Product.findById(id) // 90
        const result = await Product.findByIdAndUpdate(id, {quantity : product.quantity - orderQuantity }, {new: true})
        res.status(201).json({
            message: "Order created successfully",
            data: order,
            result: result
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
        
    }
}