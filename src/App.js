import logo from './media/logo.png';
import './styles/styles.css';
import bordercollie from './media/borderCollie.jpg'
import rhodesian from './media/rhodesian.jpg'

// CLASE VIDEO 22 DE SEPTIEMBRE --> INICIANDO MANEJO DE REACTJS
function App() {
  return (
    <div className="App">
     <header>
      <ul className="navbar">
        <li>
          <img src={logo} alt="imagen" className="logo" />
        </li>
        <li>
          <button className="botonGenerico mainButton">Nueva Post</button>
        </li>
        <li>
          <div className="buscar">
            <input placeholder="Buscar una raza" />
            <i className="fas fa-search botonGenerico iconoBusqueda"></i>
          </div>
        </li>
        <li><button className="botonGenerico secondaryButton">Login</button></li>
        <li><button className="botonGenerico mainButton">Registro</button></li>
      </ul>
    </header>
    <main>
      <section>
        <h1>Razas de Perros</h1>
        <ul className="breedCardContainer">
          <li className="breedCard">
            <div className="contenedorImagen">
              <img src={bordercollie} alt="Border Collie" />
            </div>
            <span className="breedTitle">Border Collie </span>
          </li>
          <li className="breedCard">
            <div className="contenedorImagen">
              <img src={rhodesian}  alt="Rhodesian" />
            </div>
            <span className="breedTitle">Rhodesian</span>
          </li>
        </ul>
      </section>
      <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
