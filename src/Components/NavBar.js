import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/logs">Logs</Link> <Link to="/logs/new">New Log</Link>{" "}
      </nav>
    </div>
  );
}
