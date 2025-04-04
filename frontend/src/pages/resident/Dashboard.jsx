import { Box, Paper, Typography } from '@mui/material';
import Navbar from '../../components/Navbar';

function ResidentDashboard() {
  const stats = [
    { title: 'Pending Bills', value: '1' },
    { title: 'Active Complaints', value: '0' },
    { title: 'Upcoming Events', value: '2' },
    { title: 'New Notices', value: '3' }
  ];

  return (
    <div className="page">
      <Navbar title="Resident Dashboard" />
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 3
      }}>
        {stats.map((stat, index) => (
          <Paper
            key={index}
            sx={{
              p: 3,
              borderRadius: 2,
              bgcolor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ mb: 2 }}
            >
              {stat.title}
            </Typography>
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#1B2B65',
                fontWeight: 'bold'
              }}
            >
              {stat.value}
            </Typography>
          </Paper>
        ))}
      </Box>
    </div>
  );
}

export default ResidentDashboard;