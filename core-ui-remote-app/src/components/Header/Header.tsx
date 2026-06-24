import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from "react-router-dom";

function Header({ title }: { title?: string }) {
    const navigate = useNavigate();

     const handleLoginClick = () => {
        navigate('/login');
    };
  return (
  <Box>
    <AppBar position="static">
      <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            {title || 'Remote App UI'}
          </Link>
        </Typography>
          <Button color="inherit" onClick={handleLoginClick}>
            Login
          </Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header