import Order from "../models/order.js";
import calculatePrice from "../services/priceService.js";

export async function createOrder(req, res) {
  try {
    const {
      customerName,
      mobile,
      address,
      paymentMethod,
      burgerSlices,
      quantity,
    } = req.body;

    const totalPrice = calculatePrice(burgerSlices, quantity);

    const order = await Order.create({
      customerName,
      mobile,
      address,
      paymentMethod,
      burgerSlices,
      quantity,
      totalPrice,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
}
