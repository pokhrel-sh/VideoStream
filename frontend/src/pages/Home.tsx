import { Link } from "react-router"

export default function Home(){
    return (
        <div className="bg-gray-800 h-[100vh] w-[100vw] text-gray-300 flex flex-col ">

            <header className="bg-gray-900 h-2 flex items-center py-8">

                <div className="basis-1/3">
                    <svg className="ml-10" xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#b74cce"><path d="M198-160 20-480l180-320h160L180-480l104 186 312-506h164l180 320-180 320H600l180-320-104-184-310 504H198Z"/></svg>
                </div>


                <div className="basis-1/3 ">
                        <input type="text" className="w-full bg-gray-600 rounded-sm text-gray-300 px-5 py-1" placeholder="Search Users"></input>
                </div>



                <div className="basis-1/3 flex justify-end">
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded" to="/signup">Signup</Link>
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded mx-3" to="/login">Login</Link>

                    {/* Right now when the profile is hovered, it will turn red, make it so when the logged in, hovering turns it blue */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="bg-gray-400 rounded-md hover:bg-red-400 p-1 mr-4" height="31px" viewBox="0 -960 960 960" width="31px" fill="#5f6368"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                </div>  



               
            </header>

            <main className=" h-[500px] w-[100vw] flex justify-center items-center flex-col">

                <div className="bg-gray-900 p-2">
                    <img src="vite.svg" className="bg-gray-500 w-[200px] h-[100px]"></img>
                </div>

                <p>
                    Stream Name
                </p>
            </main>

            <footer className=" flex-grow flex items-end">

                <p className=" bg-gray-900 w-[100vw] py-3 pl-10 text-[0.7rem]">
                    Created by <strong>Ashish Budha Magar </strong> the 4th <br>
                    </br>
                    Copy right © Ashish Budha Magar the 4th :^/
                </p>
            </footer>
        </div>
    )
}