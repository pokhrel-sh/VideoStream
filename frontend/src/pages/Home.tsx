import "./Home.css";
import { FaUser } from "react-icons/fa";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export default function Home() {
    const rooms = [
        { id: 1, title: "Room 1", thumbnail: "https://via.placeholder.com/300x200" },
        { id: 2, title: "Room 2", thumbnail: "https://via.placeholder.com/300x200" },
        { id: 3, title: "Room 3", thumbnail: "https://via.placeholder.com/300x200" },
        { id: 4, title: "Room 4", thumbnail: "https://via.placeholder.com/300x200" },
        { id: 5, title: "Room 5", thumbnail: "https://via.placeholder.com/300x200" },
        { id: 6, title: "Room 6", thumbnail: "https://via.placeholder.com/300x200" },
        { id: 7, title: "Room 7", thumbnail: "https://via.placeholder.com/300x200" },
        { id: 8, title: "Room 8", thumbnail: "https://via.placeholder.com/300x200" },
        { id: 9, title: "Room 9", thumbnail: "https://via.placeholder.com/300x200" },
        { id: 10, title: "Room 10", thumbnail: "https://via.placeholder.com/300x200" },
        { id: 11, title: "Room 11", thumbnail: "https://via.placeholder.com/300x200" },
        { id: 12, title: "Room 12", thumbnail: "https://via.placeholder.com/300x200" }
      ]; 
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
        <main>
            <div className="room-grid">
            {rooms.map((room) => (
              <div key={room.id} className="room-item">
                <img src={room.thumbnail} alt={room.title} className="thumbnail" />
                <h3 className="room-title">{room.title}</h3>
              </div>
            ))}
            </div>
        </main>
      </body>
    </div>
  );
}
