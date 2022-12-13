import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

// async function main () {
//   const { worker } = require('./mocks/browser')
//   await worker.start()
// }


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// main();
