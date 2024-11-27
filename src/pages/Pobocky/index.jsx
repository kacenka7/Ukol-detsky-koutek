import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

export const CenterPage = ()=> {

    const [center, setCenter] = useState([]);
   
    useEffect(()=>{
    const loadData= async()=>{
    const response = await fetch ("http://localhost:4000/api/centers")
    const data = await response.json();
    setCenter(data.data);
    console.log(data)
  }
  loadData();

  }, [])

    return(
        <div>
            {center.map((pobocka)=>(
                <div>
                    <nav><Link key={pobocka.id} to={`pobocky/${pobocka.id}`}> <h3>{pobocka.name}</h3></Link></nav>
                    <p>{pobocka.address}</p>

                </div>
            ))}
        </div>
    )
}

