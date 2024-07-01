import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import TestDriveForm from './components/TestDriveForm/TestDriveForm'; // Import the form component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test-drive" component={TestDriveForm} /> {/* Add the route for the form */}
      </Switch>
    </Router>
  );
};

export default App;
