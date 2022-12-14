import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

export interface StatisticItemProps {
    icon: React.ReactElement;
    label: string, 
    value: string | number;
}
export default function StatisticItem ({icon, label, value}: StatisticItemProps) {
  return (
    <div>
      <Paper className="">
        <Box>
            {icon}
        </Box>
        <Box>
            <Typography variant="h5">{value}</Typography>
            <Typography variant="caption">{label}</Typography>
        </Box>
      </Paper>
    </div>
  );
}
