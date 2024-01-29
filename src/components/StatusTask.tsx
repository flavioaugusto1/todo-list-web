import style from "./StatusTask.module.css";

interface StatusTask {
  createdTask: number;
  finishedTask: number;
}

export function StatusTask({ createdTask, finishedTask }: StatusTask) {
  return (
    <>
      <div className={style.taskCreated}>
        <span>Tarefa criadas</span>
        <span className={style.taskCount}>{createdTask}</span>
      </div>

      <div className={style.taskFinished}>
        <span>Concluída</span>
        <span className={style.taskCount}>
          {createdTask === 0 ? 0 : `${finishedTask} de ${createdTask}`}
        </span>
      </div>
    </>
  );
}
