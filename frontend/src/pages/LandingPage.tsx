import { Link } from "react-router"


export default function LandingPage(){
    return (
        <div className="bg-black h-[100vh] w-[100vw] flex text-white justify-center items-center flex-col mb-[500px]">

            <div className="flex items-center justify-center flex-col text-center">
                <h1 className="text-[3rem] mb-10 "> Welcome to the VideoStream </h1>

                <p className="text-gray-400 text-[1.2rem] w-[500px]">
                    VideoStream is a webapp mixed of both twitch and zoom
                    You can create your own room and share the link with your
                    friends to join the room. You can also join a room by entering
                    the room id. You can also chat with your friends in the room
                </p>
            </div>

            <div className="mt-10 flex ">

                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/signup">Signup</Link>
                <div className="mx-2"></div>
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/login">Login</Link>
            </div>

        </div>
    )
}