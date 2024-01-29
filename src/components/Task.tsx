import style from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {
  function handleDeleteTask(task: string) {
    onDeleteTask(task);
  }

  return (
    <article className={style.taskContainer}>
      <input type="checkbox" name="doneTask" id="doneTask" />
      <p>{content}</p>
      <button onClick={() => handleDeleteTask(content)}>
        <Trash size={18} />
      </button>
    </article>
  );
}
