import { createBrowserHistory } from 'history';

function browserHistory() {
  let history;

  if (typeof document !== 'undefined') {
    history = createBrowserHistory();
  }

  return history;
}

export default browserHistory();
