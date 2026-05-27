const QuantityControls = ({ quantity, setQuantity }) => {
  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => {
          setQuantity(Math.max(1, quantity - 1));
        }}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        -
      </button>

      <span>{quantity}</span>

      <button
        onClick={() => {
          setQuantity(quantity + 1);
        }}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControls;
