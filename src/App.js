import './App.css';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Avatar, Button, Card, CardContent, CardHeader, Container, Divider, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import { CalendarMonth, Person, Person2Outlined } from '@mui/icons-material';
import App1 from './App1';
import App2 from './App2';

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(!show)}>
        Toggle
      </Button>
      {show ? <App1 /> : <App2 />}
    </>
  );
}

export default App;
