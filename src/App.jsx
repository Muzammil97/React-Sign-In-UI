import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './Comp/PageLayout/PageLayout';
import AuthScreen from './screens/AuthScreen';
import './App.css';

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<AuthScreen />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default App;