import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import './App.css';
import { Person } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { getUserAge, getUserName } from './store/user/user.selector';

function App2(props) {
  //const { name, age } = props;

  const { name, age } = useSelector((state) => {
    return {
      name: getUserName(state),
      age: getUserAge(state),
    }
  })

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
