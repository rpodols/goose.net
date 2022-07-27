import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Setlist from './components/Setlist';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyAccount from './pages/MyAccount';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Auth from '../src/utils/auth';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
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

const loggedIn = Auth.loggedIn();
const loggedOut = !loggedIn;


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
        <div className='margin-format'>
          <Header />
          {loggedOut && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
            </Routes>
          )}
          {loggedIn && (
                        <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/myaccount" element={<MyAccount />} />
                      </Routes>
          )}
          <Footer />
          </div>
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;
