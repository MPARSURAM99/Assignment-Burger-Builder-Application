const Slice = ({ type }) => {
  const styles = {
    Cheese: "bg-yellow-300 h-4",
    Paneer: "bg-orange-400 h-6",
    "Aloo Tikki": "bg-amber-800 h-6",
    Tomato: "bg-red-500 h-4",
    Onion: "bg-purple-400 h-4",
    Lettuce: "bg-green-500 h-4",
  };
  return (
    <div
      className={`
    w-72
    rounded-lg
    my-1
    shadow-md
    ${styles[type]}
    `}
    ></div>
  );
};

export default Slice;
