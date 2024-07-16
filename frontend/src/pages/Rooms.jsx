import { useEffect, useState } from "react"
import { socket } from "../config/socket"

export default function Rooms() {
    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        socket.on('connect', onConnect);

        return () => {
            socket.off('connect', onConnect);
        };

    }, [])

    return (
        <div>
            Server connected: {isConnected}
        </div>
    )
}