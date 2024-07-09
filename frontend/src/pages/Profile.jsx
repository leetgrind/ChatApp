import { useEffect, useState } from "react"
import { GenerateAvatars } from "../utils/AvatarGenerator";

export default function ProfilePage() {

    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        const fetchAvatars = () => {
            const res = GenerateAvatars();
            setAvatars(res);
        }

        fetchAvatars();
    }, []);

    return (
        <div>
            {avatars.map(avatar => <img src={avatar}/>)}

        </div>
    )
}