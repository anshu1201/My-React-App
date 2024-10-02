// src/components/EstimatedEngineeringCostSaved.js
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
  { day: 'S', cost: 3000 },
  { day: 'M', cost: 2500 },
  { day: 'T', cost: 4500 },
  { day: 'W', cost: 2000 },
  { day: 'T', cost: 3500 },
  { day: 'F', cost: 5000 },
  { day: 'S', cost: 4000 },
];

export const EstimatedEngineeringCostSaved = () => (
  <Box>
    <Typography variant="h6">Estimated Engineering Cost Saved</Typography>
    <Typography variant="h4">$18K</Typography>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="day" />
        <YAxis hide={true} /> {/* Hide the y-axis */}
        <Tooltip />
        <Line type="monotone" dataKey="cost" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </Box>
);
