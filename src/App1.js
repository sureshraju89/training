import './App.css';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Avatar, Card, CardContent, CardHeader, Container, Divider, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import { CalendarMonth, Person, Person2Outlined } from '@mui/icons-material';

function App1() {
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState(moment());
  const [age, setAge] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setName("Sanjay");
    return () => {
      debugger;
    }
  }, [])

  useEffect(() => {
    setAge(moment().diff(moment(DOB), "years"));
  }, [DOB])

  return (
    <Container maxWidth="sm">
      <Card elevation={10}>
        <CardHeader title="Person Information" subheader="Details" />
        <Divider />
        <CardContent>
          <TextField
            variant='outlined'
            label="Name"
            fullWidth
            placeholder='Enter your Name'
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>
                <Person />
              </InputAdornment>,
              endAdornment: <InputAdornment position='end'>
                <Person2Outlined />
              </InputAdornment>
            }}
          />
          <br />
          <br />
          <TextField
            variant='outlined'
            label="Date of Birth"
            fullWidth
            placeholder='Enter your DOB'
            type="date"
            value={DOB}
            onChange={(e) => {
              setDOB(e.target.value)
            }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>
                <CalendarMonth />
              </InputAdornment>
            }}
          />

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
        </CardContent>
      </Card>
    </Container>
  );
}

export default App1;
