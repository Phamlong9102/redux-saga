import { Paper, Typography, Box } from '@mui/material';

export interface WidgetProps {
  title: string;
  children: any;
}
export default function Widget({ title, children }: WidgetProps) {
  return (
    <Paper>
      <Typography variant="button">{title}</Typography>
      <Box mt={2}>{children}</Box>
    </Paper>
  );
}
