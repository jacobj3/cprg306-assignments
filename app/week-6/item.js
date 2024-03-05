export default function Item(props) {
  return (
    <ul className="px-2 bg-gradient-to-r from-blue-900 to-gray-800 m-5 max-w-xs rounded-md">
      <li>
        <h2 className="font-bold">{props.name}</h2>
      </li>
      <li>
        <p className="mb-4">
          Buy {props.quantity} in {props.category}
        </p>
      </li>
    </ul>
  );
}
