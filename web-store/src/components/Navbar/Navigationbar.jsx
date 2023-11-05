import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <nav className="d-flex justify-content-between align-items-center m-3">
        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
          <h1>MTM._</h1>
        </div>

        <div>
          <p>right nav</p>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
