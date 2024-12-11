import { describe, it, expect, beforeEach } from 'vitest';
import { useTodoStore } from '@/entities/todo';

const resetStore = () => {
  useTodoStore.setState({
    todos: [
      { text: 'Buy milk', completed: false, id: 1 },
      { text: 'Clean the house', completed: true, id: 2 },
      { text: 'Make dinner', completed: false, id: 3 },
    ],
  });
};

describe('useTodoStore', () => {
  beforeEach(() => {
    resetStore();
  });

  it('should initialize with default todos', () => {
    const { todos } = useTodoStore.getState();
    expect(todos).toEqual([
      { text: 'Buy milk', completed: false, id: 1 },
      { text: 'Clean the house', completed: true, id: 2 },
      { text: 'Make dinner', completed: false, id: 3 },
    ]);
  });

  it('should add a new todo', () => {
    const { addTodo } = useTodoStore.getState();
    addTodo('Learn Vitest');

    const updatedTodos = useTodoStore.getState().todos;
    expect(updatedTodos).toHaveLength(4);
    expect(updatedTodos[3]).toEqual(
      expect.objectContaining({ text: 'Learn Vitest', completed: false })
    );
  });

  it('should toggle the completed status of a todo', () => {
    const { updateStatus } = useTodoStore.getState();

    updateStatus(1);
    let updatedTodos = useTodoStore.getState().todos;
    expect(updatedTodos.find((todo) => todo.id === 1)?.completed).toBe(true);

    updateStatus(1);
    updatedTodos = useTodoStore.getState().todos;
    expect(updatedTodos.find((todo) => todo.id === 1)?.completed).toBe(false);
  });

  it('should clear completed todos', () => {
    const { clearTodoList } = useTodoStore.getState();
    clearTodoList();

    const updatedTodos = useTodoStore.getState().todos;
    expect(updatedTodos).toEqual([
      { text: 'Buy milk', completed: false, id: 1 },
      { text: 'Make dinner', completed: false, id: 3 },
    ]);
  });
});
