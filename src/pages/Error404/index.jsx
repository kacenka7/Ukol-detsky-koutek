import { Link } from "react-router-dom"

export const Error = ()=>{
    return(
        <div>
        <main>
            <h2>Stránka nenalezena</h2>
            <p>Error 404</p>
            <div>
                <Link to="/">Zpět na hlavní stránku</Link>
            </div>
            
        </main>
    </div>  
    )
}