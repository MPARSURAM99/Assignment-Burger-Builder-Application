import { useState } from "react";
import api from "../../services/api.js";

const Checkout = ({ slices, quantity, totalPrice }) => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    mobile: "",
    address: "",
    paymentMethod: "UPI",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    if (!form.customerName.trim()) {
      alert("Enter customer name");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      alert("Enter valid mobile number");
      return;
    }

    if (!form.address.trim()) {
      alert("Enter address");
      return;
    }

    try {
      const data = {
        ...form,
        burgerSlices: slices.map((slice) => slice.type),
        quantity,
        totalPrice,
      };

      const response = await api.post("/orders", data);

      alert("Order placed successfully");
      console.log(response.data);

      setShowModal(false);
      setForm({
        customerName: "",
        mobile: "",
        address: "",
        paymentMethod: "UPI",
      });
    } catch (error) {
      console.error(error);
      alert("Order failed");
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="
          w-full
          mt-5
          bg-green-600
          text-white
          font-bold
          p-4
          rounded-xl
          shadow-lg
          hover:bg-green-700
        "
      >
        Place Order ₹{totalPrice}
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-5">Checkout</h2>

            <input
              type="text"
              name="customerName"
              placeholder="Customer Name"
              value={form.customerName}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <textarea
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-5"
            >
              <option>UPI</option>
              <option>Cash</option>
              <option>COD</option>
              <option>Net Banking</option>
            </select>

            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={placeOrder}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
