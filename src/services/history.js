import { createHashHistory, createBrowserHistory } from 'history';

function browserHistory(hashMode) {
  return hashMode ? createHashHistory() : createBrowserHistory();
}

export default browserHistory;
