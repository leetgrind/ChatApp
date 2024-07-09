import { useEffect, useState } from "react"

export default function ApiTest() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3001");
                console.log(await res.text());
                setData("complete");
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchData();
    })

    return 
    <div>
        {data}
    </div>
}