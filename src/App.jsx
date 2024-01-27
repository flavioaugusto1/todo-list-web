import "./global.css";
import style from "./App.module.css";
import Rocket from "./assets/rocket.svg";

function App() {
  return (
    <div>
      <div className={style.wrapper}>
        <header>
          <div>
            <img src={Rocket} alt="imagem de um foguete roxo decolando" />
          </div>
          <div className={style.brand}>
            <span>to</span>
            <span>do</span>
          </div>
        </header>
        <main>
            
        </main>
      </div>
    </div>
  );
}

export default App;
