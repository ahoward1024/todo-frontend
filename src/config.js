import urljoin from 'url-join';

// Load local development environment, or blank for production and let host
// headers take care of it

const TODO_HOST = process.env.REACT_APP_TODO_HOST ||
  'http://localhost:5000/';
const config = {
  'TODO_URL_GET': urljoin(TODO_HOST, '/todos.get'),
  'TODO_URL_ADD': urljoin(TODO_HOST, '/todos.add'),
  'TODO_URL_TOGGLE': urljoin(TODO_HOST, '/todos.toggle'),
  'TODO_URL_TOGGLEALL': urljoin(TODO_HOST, 'todos.toggleall'),
  'TODO_URL_HEALTHCHECK': urljoin(TODO_HOST, 'healthcheck')
};

export default config;
