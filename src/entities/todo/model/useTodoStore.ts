import { create } from 'zustand';
import { TodoStoreType } from '@/entities/todo/model/types.ts';
import { persist } from 'zustand/middleware';

export const useTodoStore = create<TodoStoreType>()(
  persist(
    (set) => ({
      todos: [
        { text: 'Buy milk', completed: false, id: 1 },
        { text: 'Clean the house', completed: true, id: 2 },
        { text: 'Make dinner', completed: false, id: 3 },
      ],
      addTodo: (text: string) =>
        set((state) => ({
          todos: [...state.todos, { text, completed: false, id: Date.now() }],
        })),
      updateStatus: (id: number) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      clearTodoList: () =>
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        })),
    }),
    { name: 'todo-storage' }
  )
);
