import { AppBar, Container, Toolbar } from '@mui/material';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import logo from './logo.svg';
import RoutesApp from './routes/RoutesApp';

function App() {
  return (
    <div>
      <AppBar position='static'><Toolbar>Space Travels</Toolbar></AppBar>

      <Container>
        <RoutesApp />
      </Container>

    </div>
  );
}

export default App;
