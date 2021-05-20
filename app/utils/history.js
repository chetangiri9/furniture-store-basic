import { createBrowserHistory } from 'history';
const baseUrl = process.env.NODE_ENV === 'production' ? '/furniture-store-basic' : '/';
const history = createBrowserHistory({ basename: baseUrl });
export default history;
