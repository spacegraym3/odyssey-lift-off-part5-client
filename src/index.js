import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import GlobalStyles from './styles';
import Pages from './pages';

const client = new ApolloClient({
  uri: 'https://odyssey-part-5-turotial.herokuapp.com/', // change this to YOUR server URI
  cache: new InMemoryCache(),
  name: 'web',
  version: '1.0',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root'),
);
