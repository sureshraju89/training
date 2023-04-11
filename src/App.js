import { useState } from 'react';
import './App.css';
import App1 from './App1';
import App2 from './App2';
import { Grid } from '@mui/material';

function App() {
  const [show, setShow] = useState(false);
  const [displayName, setDisplayName] = useState("Yet to Show");
  const [displayAge, setDisplayAge] = useState(0);

  return (
    // <Grid container>
    //   <Grid item xs={12} sm={12} md={6} lg={6}>
    //     <App1
    //       onNameChange={(name) => setDisplayName(name)}
    //       onAgeChange={(name) => setDisplayAge(name)}
    //       onUpdate={(name, age) => {
    //         setDisplayAge(age);
    //         setDisplayName(name)
    //       }}
    //     />
    //   </Grid>
    //   <Grid item xs={12} sm={12} md={6} lg={6}>
    //     <App2 name={displayName} age={displayAge} />
    //   </Grid>
    // </Grid>

    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <App1 />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <App2 />
      </Grid>
    </Grid>
    //   {/* <Button onClick={() => setShow(!show)}>
    //     Toggle
    //   </Button>
    //   {show ? <App1 /> : <App2 />} */}
    // </>
  );
}

export default App;
