import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import './App.css';
import { Person } from '@mui/icons-material';

function App2(props) {
  const { name, age } = props;
  return (
    <Container maxWidth="sm">
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary={age} />
        </ListItem>
      </List>
    </Container>
  );
}

export default App2;
