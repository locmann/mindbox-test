interface TodoData {
  id: number;
  completed: boolean;
  text: string;
}

type TodoStoreType = {
  todos: TodoData[] | [];
  addTodo: (text: string) => void;
  clearTodoList: () => void;
  updateStatus: (id: number) => void;
};

export type { TodoStoreType, TodoData };
