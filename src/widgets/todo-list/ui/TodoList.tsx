import { ActionTab, Todo, useTodoStore } from '@/entities/todo';
import { KeyboardEvent } from 'react';
import {
  Input,
  InputAdornment,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useFilterStore } from '@/entities/filter';
import { filterTodos } from '@/shared/filterTodos.ts';

export const TodoList = () => {
  const { todos, addTodo } = useTodoStore();
  const { filter } = useFilterStore();
  const matches = useMediaQuery('(max-width:600px)');

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const text = e.currentTarget.value;
      if (text.length > 0) {
        addTodo(e.currentTarget.value);
        e.currentTarget.value = '';
      }
    }
  };

  return (
    <>
      <Typography variant="h2">todos</Typography>
      <Stack
        sx={{
          border: '1px solid lightgray',
          boxShadow: '0 1px 10px 0 gray',
          width: matches ? 'auto' : '780px',
        }}
      >
        <Input
          placeholder="What needs to be done?"
          onKeyDown={handleEnter}
          startAdornment={
            <InputAdornment position="start">
              <ExpandMore />
            </InputAdornment>
          }
          sx={{
            padding: '10px',
            fontSize: '18px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
          }}
        />
        {filterTodos(todos, filter).map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            text={todo.text}
          />
        ))}
        <ActionTab />
      </Stack>
    </>
  );
};
