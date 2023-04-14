export default function Button({ text, handleClick }) {
  return (
    <button
      className="px-10 py-2 mb-3 font-bold text-white bg-red-500 rounded-xl w-max"
      onClick={handleClick}
    >
      {text}
    </button>
  )
}
