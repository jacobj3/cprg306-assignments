export default function Item(props) {
  return (
    <li className="m1-4">
      <h2 className="font-bold">{props.name}</h2>
      <p className="text-1x1 mb-6">
        {props.quantity}, {props.category}
      </p>
    </li>
  );
}
