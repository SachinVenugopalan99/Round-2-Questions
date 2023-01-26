import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/form/form';
import Grid from './components/grid/grid';

const App = () => {
    return (
    <Router>
        <div>
          <Routes>
          <Route exact path="/" element={<Form/>}/>
          <Route exact path="/grid" element={<Grid/>}/>
          </Routes>
        </div>
      </Router>
    );
}

export default App;