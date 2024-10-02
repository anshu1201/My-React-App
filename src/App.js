// src/App.js
import { Grid, Container, Paper } from '@mui/material';
import { HiringFunnel } from './components/HiringFunnel';
import { TotalCandidates } from './components/TotalCandidates';
import { AverageScore } from './components/AverageScore';
import { EngineeringHoursSaved } from './components/EngineeringHoursSaved';
import { AverageTimeTaken } from './components/AverageTimeTaken';
import { EstimatedEngineeringCostSaved } from './components/EstimatedEngineeringCostSaved';
import { AssessmentPerformance } from './components/AssessmentPerformance';
import { RecentAssessments } from './components/RecentAssessments';

function App() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        {/* First Column */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginBottom: 2 }}>
            <HiringFunnel />
          </Paper>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
            <RecentAssessments />
          </Paper>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginBottom: 2 }}>
            <TotalCandidates />
          </Paper>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginBottom: 2 }}>
            <AverageScore />
          </Paper>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginBottom: 2 }}>
            <EngineeringHoursSaved />
          </Paper>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
            <AverageTimeTaken />
          </Paper>
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginBottom: 2 }}>
            <EstimatedEngineeringCostSaved />
          </Paper>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
            <AssessmentPerformance />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
