// Nav.js

import { useNavigate } from "react-router-dom";

export default function Nav() {
  const btnHome = useNavigate();
  const homeLink = (route) => {
    btnHome(route);
  };
  return (
    <nav>
      <div
        className="home-box"
        onClick={() => {
          homeLink("/");
        }}
      >
        <img src="/src/images/ic_baseline-home.png" alt="home" />
      </div>
    </nav>
  );
}
