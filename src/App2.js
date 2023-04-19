import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import './App.css';
import { Person } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { getUserAge, getUserName } from './store/user/user.selector';
import ButtonAppBar from './common/header';

function App2(props) {
  //const { name, age } = props;

  const { name, age } = useSelector((state) => {
    return {
      name: getUserName(state),
      age: getUserAge(state),
    }
  })

  return (
    <div>
      <ButtonAppBar>
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

      </ButtonAppBar>
    </div>
  );
}

export default App2;
