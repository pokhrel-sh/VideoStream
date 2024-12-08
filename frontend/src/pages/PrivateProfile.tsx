import { useParams, useNavigate } from "react-router-dom";

export default function PrivateProfile() {
  const { user_id } = useParams(); // Extract user_id from URL
  const navigate = useNavigate(); // Initialize navigate function

  const sampleUser = {
    userid: 1,
    username: "asahoo312",
    password: "password123",
    name: "Anish",
    email: "anish2004@gmail.com",
    date_of_birth: "12/03/2004",
    followers: 312,
    last_room_joined: 312532,
    account_bio: "My name is Anish Yahoo and I'm gay."
  };

  const displayedUser = sampleUser.userid.toString() === user_id ? sampleUser : null;

  const handleSignOut = () => {
    // Clear user session or state (if implemented)
    console.log("User signed out"); // Replace with actual session-clearing logic
    navigate("/"); // Redirect to the landing page
  };

  if (!displayedUser) {
    return <div>User not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Private Profile</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-700">User ID</h3>
            <p className="text-gray-600">{displayedUser.userid}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Username</h3>
            <p className="text-gray-600">{displayedUser.username}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Email</h3>
            <p className="text-gray-600">{displayedUser.email}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Date of Birth</h3>
            <p className="text-gray-600">{displayedUser.date_of_birth}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Followers</h3>
            <p className="text-gray-600">{displayedUser.followers}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Last Room Joined</h3>
            <p className="text-gray-600">{displayedUser.last_room_joined}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Bio</h3>
            <p className="text-gray-600">{displayedUser.account_bio}</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleSignOut}
        className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Sign Out
      </button>
    </div>
  );
}
