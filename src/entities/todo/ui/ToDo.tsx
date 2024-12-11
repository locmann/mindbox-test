import { FC } from 'react';
import { TodoData } from '@/entities/todo/model/types.ts';
import { useTodoStore } from '@/entities/todo';
import { Checkbox, InputAdornment, Stack, Typography } from '@mui/material';
import { RadioButtonUnchecked, CheckCircleOutline } from '@mui/icons-material';

export const Todo: FC<TodoData> = ({ id, text, completed }) => {
  const { updateStatus } = useTodoStore();

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        padding: '10px 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <InputAdornment position="start">
        <Checkbox
          checked={completed}
          onChange={() => updateStatus(id)}
          icon={<RadioButtonUnchecked />}
          checkedIcon={
            <CheckCircleOutline
              sx={{
                color: 'green',
              }}
            />
          }
        />
      </InputAdornment>
      <Typography
        sx={{
          textDecoration: completed ? 'line-through' : 'none',
          color: completed ? 'rgba(0, 0, 0, 0.4)' : 'black',
          marginLeft: '10px',
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};
