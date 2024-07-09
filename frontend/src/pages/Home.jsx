import { useAuth } from "../contexts/AuthContext"


export default function Home() {
    
  const {currentUser} = useAuth();

    return (
        <div>
            Home
            Welcome {currentUser.email} - {currentUser.displayName}
        </div>
    )
}