const slices = ["Aloo Tikki", "Paneer", "Cheese", "Tomato", "Onion", "Lettuce"];

const styles = {
  "Aloo Tikki": "bg-amber-800",
  Paneer: "bg-orange-400",
  Cheese: "bg-yellow-300",
  Tomato: "bg-red-500",
  Onion: "bg-purple-400",
  Lettuce: "bg-green-500",
};

const SliceControls = ({ addSlice }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {slices.map((slice) => (
        <button
          key={slice}
          onClick={() => addSlice(slice)}
          className={`
              ${styles[slice]}
              text-white
              font-semibold
              rounded-lg
              p-3
              shadow-lg
              hover:scale-105
              transition
            `}
        >
          {slice}
        </button>
      ))}
    </div>
  );
};

export default SliceControls;
