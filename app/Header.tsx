export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-5xl">bareBones</h1>
      <nav>
        <ul className="flex gap-2">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
