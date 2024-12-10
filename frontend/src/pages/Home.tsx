import "./Home.css";
import { FaUser } from "react-icons/fa";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <head>
        <title>Video Stream</title>
      </head>
      <body>
        <header>
          <button className="logo">
            <MdOutlineVideoCameraFront className="icon" />
            <span>VideoStream</span>
          </button>

          <div className="search">
            <input type="text" className="search-bar" placeholder="Search..." />
            <button><FaSearch className="search-icon" /></button>
          </div>

          <div className="buttons">
            <button className="login">LOG IN</button>
            <button className="signup">SIGN UP</button>
          </div>
        </header>
      </body>
    </div>
  );
}
