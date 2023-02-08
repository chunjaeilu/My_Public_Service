// Nav.js
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <div className="home-box">
          <img src="/src/images/ic_baseline-home.png" alt="home" />
        </div>
      </Link>
    </nav>
  );
}
