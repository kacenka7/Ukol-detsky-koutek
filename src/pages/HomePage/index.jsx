import './style.css';
import { App } from '../../components/App';
import { Link, Outlet } from 'react-router-dom';



export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <App/>
      </header>
      <main>
        <p>Vítejte v našem dětském koutku! Jsme místo plné zábavy a dobrodružství pro všechny děti do 6 let. Najdete u nás hry, aktivity, kvízy a mnoho dalšího, co zabaví vaše ratolesti a pomůže jim učit se nové věci. Vyberte si některou z našich poboček a začněte objevovat svět plný překvapení!</p>
        <nav><Link  to="/onas" ><h2>O nás</h2></Link></nav>
        <nav><Link to="/kontakt"><h2>Kontakt</h2></Link></nav>
        <nav><Link to ="/pobocky"><h2>Pobočky</h2></Link></nav>
        <Outlet>
          
        </Outlet>
        
      </main>
      <footer>
        <p>Dětský koutek</p>
      </footer>
    </div>
  );
};
