import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

export const CenterPage = ()=> {

    const [centers, setCenter] = useState([]);
   
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
            {centers.map((center)=>(
                <div>
                    <nav><Link key={center.id} to={`/pobocky/${center.id}`} state={center}> <h3>{center.name}</h3></Link></nav>
                    <p>{center.address}</p>

                </div>
            ))}
        </div>
    )
}

