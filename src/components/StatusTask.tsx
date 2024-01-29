import style from "./StatusTask.module.css";

export function StatusTask() {
  return (
    <>
      <div className={style.taskCreated}>
        <span>Tarefa criadas</span>
        <span className={style.taskCount}>0</span>
      </div>

      <div className={style.taskFinished}>
        <span>Concluída</span>
        <span className={style.taskCount}>0</span>
      </div>
    </>
  );
}
