import React from 'react';
import './App.css';
import Login from './components/Login';
import client from './apollo-client'
import { ApolloProvider } from '@apollo/client';

const App: React.FC = () => {

  return (
     <ApolloProvider client={client}>
        <div className="App">
        <span className="heading"> Login Screen</span>
        <Login/>
        </div>
      </ApolloProvider>    
  );
}

export default App;
