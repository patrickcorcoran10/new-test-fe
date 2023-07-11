// import React, { useEffect, useRef, useState } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Dashboard from "./pages/Dashboard";
import Calories from "./pages/Calories";
import { Register } from "./Components/Signup";
import { BrowserRouter, Routes, Route,
  //  NavLink 
  } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";


const httpLink = createHttpLink({
  uri: 'https://cal-pal-server-273e253c14e5.herokuapp.com/graphql'
});

// const httpLink = createHttpLink({
//   uri: '/graphql'
// });


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
  console.log(window.localStorage.getItem('id_token'))
 
  const toggleForm = () => {
    if (window.location.pathname === '/login') {
      window.location.pathname = '/register'
    } else { window.location.pathname = '/login' }
  }
  return (
    <ApolloProvider client={client}>
  <BrowserRouter>
        <div>
          <nav>
            <Navbar />
          </nav>
          <Routes>
            <Route path='calories' element={<Calories />} />
            <Route path='login' element={<Login onFormSwitch={toggleForm} />} />
            <Route path='/' element={<Homepage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='register' element={<Register onFormSwitch={toggleForm} />} />
            <Route path='/about-us' element={<AboutUs />} />


          </Routes>
        </div>
      </BrowserRouter>

    </ApolloProvider>
  );
}

export default App;
