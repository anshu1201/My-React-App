// src/components/RecentAssessments.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

export const RecentAssessments = () => {
  const assessments = [
    { title: "ReactJS Assessment SDE 1", status: "In Progress", date: "2 Apr 2024", studentsAssigned: 210, attended: 10 },
    { title: "ReactJS Assessment SDE 1", status: "In Progress", date: "2 Apr 2024", studentsAssigned: 210, attended: 0 },
    { title: "ReactJS Assessment SDE 1", status: "Incomplete", date: "2 Apr 2024", studentsAssigned: 210, attended: 0 },
    { title: "ReactJS Assessment SDE 1", status: "Published", date: "2 Apr 2024", studentsAssigned: 210, attended: 20 },
  ];

  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Recent Assessments
      </Typography>
      {assessments.map((assessment, index) => (
        <Box key={index} sx={{ marginBottom: 1, borderBottom: '1px solid #ccc', paddingBottom: 1 }}>
          <Typography variant="body1" fontWeight="bold">
            {assessment.title}
          </Typography>
          <Typography variant="body2">
            {assessment.status} - {assessment.date} - {assessment.studentsAssigned} Students Assigned - {assessment.attended} attended
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};
