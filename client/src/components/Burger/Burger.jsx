import Slice from "./Slice";

const Burger = ({ slices, setSlices }) => {
  const removeSlice = (id) => {
    setSlices(slices.filter((slice) => slice.id !== id));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Bread Top */}
      <div className="w-56 sm:w-64 md:w-72 h-14 bg-yellow-700 rounded-t-full mb-1 shadow-md" />

      {/* Burger Slices */}
      {slices.map((slice) => (
        <div key={slice.id} className="relative flex items-center">
          <Slice type={slice.type} />

          {/* Remove Button */}
          <button
            onClick={() => removeSlice(slice.id)}
            className="
              absolute
              -right-10
              sm:-right-12
              bg-red-500
              hover:bg-red-600
              text-white
              w-7
              h-7
              rounded-full
              font-bold
              shadow-md
              transition
            "
          >
            ×
          </button>
        </div>
      ))}

      {/* Bread Bottom */}
      <div className="w-56 sm:w-64 md:w-72 h-10 bg-yellow-800 rounded-b-lg mt-1 shadow-md" />
    </div>
  );
};

export default Burger;
