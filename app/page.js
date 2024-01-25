import Link from "next/link";

export default function Heading() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <ul>
        <li>
          <Link href="week-2">Week 2 Assignment</Link>
        </li>
        <li>
          <Link href="week-3">Week 3 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}
