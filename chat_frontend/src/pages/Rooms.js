import { useEffect, useState } from "react"
import { socket } from "../config/socket"

export default function Rooms() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [username, setUsername] = useState('');

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
        <div>
            Server connected: {isConnected}
            <h1 className="text-2xl text-slate-400">Enter your username</h1>
            <input id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={loginToChat}>Submit</button>
        </div>
    )
}