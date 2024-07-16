import { useEffect, useState } from "react"
import { socket } from "../config/socket"

export default function Rooms() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        socket.on('connect', onConnect);

        return () => {
            socket.off('connect', onConnect);
        };

    }, []);

    const loginToChat = (e) => {
        e.preventDefault();
        socket.emit('join', {username});
    }



    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="text-center text-2xl font-bold tracking-tight text-slate-400">Select a chatroom</h1>
                <p className="text-center text-lg tracking-tight text-slate-400">Enter username</p>
            <input id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <select onChange={(e) => setRoom(e.target.value)}>
                <option>---Select Room ---</option>
                <option value='js'>Javascript</option>
                <option value='java'>Java</option>
                <option value='python'>Python</option>
            </select>
            <button className="flex items-center justify-center rounded-md bg-indigo-500 px-5 text-white" onClick={loginToChat}>Submit</button>
            </div>
        </div>
    )
}