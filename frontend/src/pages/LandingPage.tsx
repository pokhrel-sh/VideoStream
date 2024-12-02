export default function LandingPage(){
    return (
        <div>
            <h1> Welcome to the VideoStream.</h1>
            <p> VideoStream is a webapp mixed of both twitch and zoom</p>
            <p> You can create your own room and share the link with your friends to join the room</p>
            <p> You can also join a room by entering the room id</p>
            <p> You can also chat with your friends in the room</p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> <a href="/signup">Signup</a></button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> <a href="/login">Login</a></button>
        </div>
    )
}