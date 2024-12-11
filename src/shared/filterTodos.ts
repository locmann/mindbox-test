import { FILTER_STATE } from '@/entities/filter';
import { TodoData } from '@/entities/todo/model/types.ts';

export const filterTodos = (todo: TodoData[], filter: FILTER_STATE) => {
  switch (filter) {
    case FILTER_STATE.ALL:
      return todo;
    case FILTER_STATE.COMPLETED:
      return todo.filter((t) => t.completed);
    case FILTER_STATE.ACTIVE:
      return todo.filter((t) => !t.completed);
    default:
      throw new Error('Invalid filter state');
  }
};
