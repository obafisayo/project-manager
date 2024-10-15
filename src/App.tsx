import React from 'react';
import Routes from './routes/Routes';
import { CreateDataProvider } from './contexts/CreateDataContext';

const App = () => {
  return (
    <div>
      <CreateDataProvider>
        <Routes />
      </CreateDataProvider>
    </div>
  )
}

export default App;
