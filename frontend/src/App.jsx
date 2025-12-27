import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/globals.css';
import './styles/variables.css';
import './styles/animations.css';
import './styles/admin.css';
import './styles/user.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

