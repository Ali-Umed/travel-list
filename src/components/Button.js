export default function Button({ handleFunction, text, className }) {
  return (
    <button
      className={` marker:bg-violet-700    rounded-xl  font-semibold text-white py-2 px-2 border  hover:border-transparent bg-violet-700   ${className} `}
      onClick={handleFunction}
    >
      {text}
    </button>
  );
}
