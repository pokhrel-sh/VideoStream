import { useParams } from 'react-router-dom';

export default function PublicProfile() {
  const { user_id } = useParams(); // Extract user_id from URL
  const user = {
    user_id: 1,
    username: "asahoo312",
    password: "password123",
    name: "Anish",
    email: "anish2004@gmail.com",
    date_of_birth: "12/03/2004",
    followers: 312,
    last_room_joined: 312532,
    account_bio: "My name is Anish Yahoo and I'm gay."
  };

  // Simulate fetching user data by user_id
  const displayedUser = user.user_id.toString() === user_id ? user : null;

  if (!displayedUser) {
    return <div>User not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Public Profile</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-700">Name</h3>
            <p className="text-gray-600">{displayedUser.name}</p>
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
    </div>
  );
}
