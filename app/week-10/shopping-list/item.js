export default function Item({ name, quantity, category, onSelect }) {
  return (
    <ul
      onClick={onSelect}
      className="px-2 bg-gradient-to-r from-blue-900 to-gray-800 m-5 max-w-xs rounded-md"
      style={{ cursor: "pointer" }}
    >
      <li>
        <h2 className="font-bold">{name}</h2>
      </li>
      <li>
        <p className="mb-4">
          Buy {quantity} in {category}
        </p>
      </li>
    </ul>
  );
}
