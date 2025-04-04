import { Box, Typography, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Navbar({ title }) {
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const fetchUserDetails = async () => {
      const email = localStorage.getItem("userEmail");
      if (!email) return;

      try {
        const response = await axios.get(`http://localhost:8080/api/user-details?email=${email}`);
        if (response.status === 200) {
          setUsername(response.data.name);

          localStorage.setItem("userName", response.data.name);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 4,
      py: 2,
      borderBottom: '1px solid #e0e0e0'
    }}>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="subtitle1">{username}</Typography>
        <Avatar sx={{ bgcolor: '#1B2B65' }}>{username.charAt(0).toUpperCase()}</Avatar>
      </Box>
    </Box>
  );
}

export default Navbar;
