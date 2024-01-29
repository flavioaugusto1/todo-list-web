import style from "./Task.module.css";

import { Trash } from "@phosphor-icons/react";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
  onDoneTask: (task: string) => void;
}

export function Task({ content, onDeleteTask, onDoneTask }: TaskProps) {
  function handleDeleteTask(task: string) {
    onDeleteTask(task);
  }

  function handleOnDoneTask(task: string) {
    onDoneTask(task);
  }

  return (
    <li className={style.taskContainer}>
      <input
        type="checkbox"
        name="doneTask"
        id="doneTask"
        onClick={() => handleOnDoneTask(content)}
      />
      <p>{content}</p>
      <button onClick={() => handleDeleteTask(content)}>
        <Trash size={18} />
      </button>
    </li>
  );
}
