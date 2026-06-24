import { 
  Container, 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Divider 
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import WindowIcon from '@mui/icons-material/Window'; // Represents Microsoft
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../auth/authConfig';

export default function SSOLoginComponent() {
  const { instance } = useMsal();

  // Replace these handlers with your actual identity provider routing logic (e.g., Firebase, Auth0, Supabase)
  const handleSSOLogin = (provider:string) => {
    console.log(`Initiating SSO Redirect via: ${provider}`);
    instance.loginRedirect(loginRequest).catch((error: unknown) => {
      console.error("Login error:", error);
    });
    // Example: window.location.href = `https://yourdomain.com{provider}`;
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card elevation={4} sx={{ width: '100%', borderRadius: 3, p: 2 }}>
          <CardContent>
            {/* Header Text */}
            <Typography component="h1" variant="h5" align="center"  gutterBottom>
              Welcome Back
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
              Sign in with your organization account
            </Typography>

            {/* SSO Action Buttons Group */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              
              <Button
                variant="outlined"
                fullWidth
                startIcon={<GoogleIcon sx={{ color: '#DB4437' }} />}
                onClick={() => handleSSOLogin('google')}
                sx={{ transform: 'none', textTransform: 'none', fontSize: '1rem', py: 1 }}
                disabled
              >
                Sign in with Google
              </Button>

              <Button
                variant="outlined"
                fullWidth
                startIcon={<WindowIcon sx={{ color: '#0078D4' }} />}
                onClick={() => handleSSOLogin('microsoft')}
                sx={{ transform: 'none', textTransform: 'none', fontSize: '1rem', py: 1 }}
              >
                Sign in with Microsoft
              </Button>

              <Button
                variant="outlined"
                fullWidth
                startIcon={<GitHubIcon sx={{ color: '#24292F' }} />}
                onClick={() => handleSSOLogin('github')}
                sx={{ transform: 'none', textTransform: 'none', fontSize: '1rem', py: 1 }}
                disabled
              >
                Sign in with GitHub
              </Button>

            </Box>

            <Divider sx={{ my: 3 }}>
              <Typography variant="caption" color="text.secondary">OR</Typography>
            </Divider>

            {/* Optional backup link for traditional internal logins */}
            <Button 
              fullWidth 
              variant="text" 
              size="small" 
              sx={{ textTransform: 'none' }}
              disabled
            >
              Use regular email credentials
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
