import React from 'react';
import { makeStyles } from '@material-ui/core';
import Navbar from './Components/Navbar';



const useStyle = makeStyles((theme) => ({
  button: {

  }
}))

function App() {
  const classes = useStyle()
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
