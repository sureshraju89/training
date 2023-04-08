import './App.css';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Container, Divider, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import { CalendarMonth, Person, Person2Outlined } from '@mui/icons-material';

function App3(props) {
  const { onNameChange, onAgeChange, onUpdate } = props;
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [age, setAge] = useState(0);
  const [isValidated, setValidated] = useState(false);

  // useEffect(() => {
  //   onNameChange(name, age);
  // }, [name])

  // useEffect(() => {
  //   onAgeChange(age);
  // }, [age])

  // useEffect(() => {
  //   setName("Sanjay");
  //   return () => {
  //     debugger;
  //   }
  // }, [])

  useEffect(() => {
    setAge(moment().diff(moment(DOB), "years"));
  }, [DOB]);

  const validate = () => {
    return name !== "" && age > 1 && DOB !== "";
  }

  function handleUpdate() {
    if (validate()) {
      onUpdate(name, age)
    }
    else {
      setValidated(true);
    }
  }

  //const isValid = validate();

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
            error={isValidated && name === ""}
            helperText={isValidated && name === "" ? "Please enter the name" : ""}
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
            error={isValidated && DOB === ""}
            helperText={isValidated && DOB === "" ? "Please enter the DOB" : ""}
            InputProps={{
              startAdornment: <InputAdornment position='start'>
                <CalendarMonth />
              </InputAdornment>
            }}
          />
        </CardContent>
        <CardActions>
          <Button
            //disabled={!isValid}
            onClick={() => {
              handleUpdate()
            }} variant='contained' fullWidth color="success">
            Update
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default App1;
