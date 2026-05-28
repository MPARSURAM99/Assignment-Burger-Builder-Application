import { useState } from "react";

import Burger from "../components/Burger/Burger";
import SliceControls from "../components/Controls/SliceControls";
import QuantityControls from "../components/Controls/QuantityControls";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout.jsx";

const Home = () => {
  const [slices, setSlices] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const prices = {
    "Aloo Tikki": 20,
    Paneer: 25,
    Cheese: 15,
    Tomato: 10,
    Onion: 10,
    Lettuce: 8,
  };

  const addSlice = (type) => {
    if (slices.length >= 10) {
      alert("Maximum 10 slices");
      return;
    }

    const newSlice = {
      id: Date.now().toString(),
      type,
    };

    setSlices([...slices, newSlice]);
  };

  const totalPrice =
    slices.reduce((sum, slice) => sum + prices[slice.type], 10) * quantity;

  return (
    <div className="min-h-screen p-10 bg-gradient-to-r from-slate-100 to-blue-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div>
          <SliceControls addSlice={addSlice} />
        </div>

        <div>
          <Burger slices={slices} setSlices={setSlices} />
        </div>

        <div>
          <QuantityControls quantity={quantity} setQuantity={setQuantity} />
          <Cart slices={slices} quantity={quantity} totalPrice={totalPrice} />
          <Checkout
            slices={slices}
            quantity={quantity}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
