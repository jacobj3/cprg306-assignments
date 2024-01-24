export default function Item(props) {
  return (
    <li className="px-2 bg-gradient-to-r from-blue-700 via-red-700 to-yellow-500 m-5 max-w-xs rounded-md">
      <h2 className="font-bold">{props.name}</h2>
      <p className="mb-4">
        Buy {props.quantity} in {props.category}
      </p>
    </li>
  );
}
