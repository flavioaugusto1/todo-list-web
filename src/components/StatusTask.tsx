import style from "./StatusTask.module.css";

interface StatusTask {
  createdTask: number;
  finishedTask: number;
}

export function StatusTask({ createdTask }: StatusTask) {
  return (
    <>
      <div className={style.taskCreated}>
        <span>Tarefa criadas</span>
        <span className={style.taskCount}>{createdTask}</span>
      </div>

      <div className={style.taskFinished}>
        <span>Concluída</span>
        <span className={style.taskCount}>0</span>
      </div>
    </>
  );
}
