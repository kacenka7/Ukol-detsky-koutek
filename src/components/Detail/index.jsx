import { CenterPage } from "../../pages/Pobocky";
import { useParams } from "react-router-dom";

export const CenterDetail = ()=>{
    const {centerId} = useParams();
    const center = CenterPage.find(i=>i.id === Number(centerId))

    return(
        <div>
            InvoicePage {center}
        </div>
    )
}