import style from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";

export function Task() {
  return (
    <article className={style.taskContainer}>
      <input type="checkbox" name="doneTask" id="doneTask" />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button>
        <Trash size={24} />
      </button>
    </article>
  );
}
