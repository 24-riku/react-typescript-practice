import { TodoType } from "./types/todo";
import { VFC } from "react";
export const Todo: VFC<Pick<TodoType, "userId" | "completed" | "title">> = (
  props
) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
