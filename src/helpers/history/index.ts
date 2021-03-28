import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
  basename: './'
});

export function redirectTo(path: string) {
  history.push(path);
}

export default history;
