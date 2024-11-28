
import { useLocation } from "react-router-dom";

export const CenterDetail = ()=>{

const location = useLocation();
const center = location.state;
    return(
        <div>
            <h2>{center.name}</h2> 
            <p>{center.adress}</p>
            <p>Kapacita: {center.capacity}</p>
            <p>Otevírací doba:</p>
            <p>Pondělí: {center.open.mon}</p>
            <p>Úterý: {center.open.tue}</p>
            <p>Středa: {center.open.wed}</p>
            <p>Čtvrtek: {center.open.thu}</p>
            <p>Pátek: {center.open.fri}</p>
            {center.open.sat !== null && (<p>Sobota: {center.open.sat}</p>)}
            {center.open.sun !== null && (<p>Neděle: {center.open.sun}</p>)}
            <h3>Informace:</h3>
            <p>{center.info}</p>

            
        </div>
    )
}