import "./global.css";
import style from "./App.module.css";
import Rocket from "./assets/rocket.svg";
import { PlusCircle } from "@phosphor-icons/react";
import { StatusTask } from "./components/StatusTask";
import { Task } from "./components/Task";
import { useState, ChangeEvent, FormEvent } from "react";

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [task, setTask] = useState<string[]>([]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    for (const item of task) {
      if (item === newTask) {
        return alert("A tarefa que está cadastrando já existe.");
      }
    }

    setTask([...task, newTask]);
  }

  function handleDeleteTask(item: string) {
    const withoutDeletedTask = task.filter((task) => task !== item);
    setTask(withoutDeletedTask);
  }

  const numberOfTaskCreated = task.length;

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
              onChange={handleNewTaskChange}
            />
            <button type="submit" onClick={handleNewTask}>
              <span>Criar</span>
              <PlusCircle size={22} weight="bold" />
            </button>
          </form>

          <div className={style.contentTasks}>
            <header>
              <StatusTask createdTask={numberOfTaskCreated} />
            </header>

            <section>
              {task.map((item) => {
                return (
                  <Task
                    key={item}
                    content={item}
                    onDeleteTask={handleDeleteTask}
                  />
                );
              })}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
