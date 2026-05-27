const Cart = ({ slices, quantity, totalPrice }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg">
      <h2 className="font-bold text-xl mb-3">Cart</h2>

      <p>Slices: {slices.map((slice) => slice.type).join(", ")}</p>

      <p>Quantity: {quantity}</p>

      <p>Total: ₹{totalPrice}</p>
    </div>
  );
};

export default Cart;
