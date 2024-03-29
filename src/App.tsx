import { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PlusCircle, Clipboard } from "@phosphor-icons/react";
import "./global.css";
import style from "./App.module.css";
import Rocket from "./assets/rocket.svg";
import { StatusTask } from "./components/StatusTask";
import { Task } from "./components/Task";

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [task, setTask] = useState<string[]>([]);
  const [doneTask, setDoneTask] = useState<string[]>([]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    const verifyIfExistsTaskWrite = newTask.length === 0;

    if (verifyIfExistsTaskWrite) {
      alertError("Você precisa preencher o campo para adicionar uma tarefa.");
      return;
    }

    for (const item of task) {
      if (item === newTask) {
        return alertWarn("A tarefa que está cadastrando já existe.");
      }
    }

    setTask([...task, newTask]);
    setNewTask("");
    alertSuccess("Tarefa adicionada com sucesso.");
  }

  function handleDeleteTask(item: string) {
    const withoutDeletedTask = task.filter((task) => task !== item);
    setTask(withoutDeletedTask);

    const newFinishedTasks = doneTask.filter((task) => {
      const filteredTask = task !== item;
      return filteredTask;
    });

    setDoneTask(newFinishedTasks);
    alertSuccess("Tarefa excluída com sucesso.");
  }

  function handleDoneTask(taskFinished: string) {
    const verifyIfTaskIsFinished = doneTask.includes(taskFinished);

    if (!verifyIfTaskIsFinished) {
      setDoneTask([...doneTask, taskFinished]);
      return;
    }

    const newFinishedTasks = doneTask.filter((task) => {
      const filteredTask = task !== taskFinished;
      return filteredTask;
    });

    setDoneTask(newFinishedTasks);
  }

  function alertError(message: string) {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
    });
  }

  function alertSuccess(message: string) {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
    });
  }

  function alertWarn(message: string) {
    toast.warning(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
    });
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
              placeholder="Adicione uma nova tarefa"
              value={newTask}
              onChange={handleNewTaskChange}
            />

            <button type="submit" onClick={handleNewTask}>
              <span>Criar</span>
              <PlusCircle size={22} weight="bold" />
            </button>
            <ToastContainer />
          </form>

          <div className={style.contentTasks}>
            <header>
              <StatusTask
                createdTask={numberOfTaskCreated}
                finishedTask={doneTask.length}
              />
            </header>

            {task.length === 0 ? (
              <div className={style.emptyTask}>
                <Clipboard size={56} />
                <div className={style.emptyTextDescription}>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </div>
            ) : (
              <ul>
                {task.map((item) => {
                  return (
                    <Task
                      key={item}
                      content={item}
                      onDeleteTask={handleDeleteTask}
                      onDoneTask={handleDoneTask}
                    />
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
