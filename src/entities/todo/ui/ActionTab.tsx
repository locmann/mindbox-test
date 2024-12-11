import { FC, MouseEvent } from 'react';
import {
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useTodoStore } from '@/entities/todo';
import { FILTER_STATE, useFilterStore } from '@/entities/filter';

export const ActionTab: FC = () => {
  const { filter, updateFilter } = useFilterStore();

  const todosCount = useTodoStore(
    (state) => state.todos.filter((todo) => !todo.completed).length
  );

  const { clearTodoList } = useTodoStore();

  const handleFilter = (
    _event: MouseEvent<HTMLElement>,
    filter: FILTER_STATE
  ) => {
    updateFilter(filter);
  };

  return (
    <Stack
      direction="row"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5em 1em',
      }}
    >
      <Typography sx={{ alignSelf: 'center' }}>
        {todosCount} items left
      </Typography>
      <ToggleButtonGroup value={filter} exclusive onChange={handleFilter}>
        <ToggleButton value={FILTER_STATE.ALL}>All</ToggleButton>
        <ToggleButton value={FILTER_STATE.ACTIVE}>Active</ToggleButton>
        <ToggleButton value={FILTER_STATE.COMPLETED}>Completed</ToggleButton>
      </ToggleButtonGroup>

      <Button variant="outlined" size="small" onClick={clearTodoList}>
        Clear completed
      </Button>
    </Stack>
  );
};
