import "./global.css";
import style from "./App.module.css";
import Rocket from "./assets/rocket.svg";
import { PlusCircle } from "@phosphor-icons/react";
import { StatusTask } from "./components/StatusTask";
import { Task } from "./components/Task";

function App() {
  return (
    <div className={style.wrapper}>
      <header>
        <div className={style.wrapperHeader}>
          <div>
            <img src={Rocket} alt="imagem de um foguete roxo decolando" />
          </div>
          <div className={style.brand}>
            <span>to</span>
            <span>do</span>
          </div>
        </div>
      </header>
      <main>
        <div className={style.content}>
          <form>
            <input
              type="text"
              name="newTask"
              id="newTask"
              placeholder="Adicione uma tarefa"
            />
            <button type="submit">
              <span>Criar</span>
              <PlusCircle size={22} weight="bold" />
            </button>
          </form>

          <div className={style.contentTasks}>
            <header>
              <StatusTask />
            </header>

            <section>
              <Task />
              <Task />
              <Task />
              <Task />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
