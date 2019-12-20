# Route History
Using history in case, you want to redirect automatic in function code like redux or mobx

### Navigation

`history` objects may be used to programmatically change the current location using the following methods:

- `history.push(path, [state])`
- `history.replace(path, [state])`
- `history.go(n)`
- `history.goBack()`
- `history.goForward()`
- `history.canGo(n)` (only in `createMemoryHistory`)

```jsx
// if case you want use history.push in redux-saga or mobx you can use import like this, default history props is exist in sub route
import { history } from 'react-router-guard';
import config from './config';

history.push('/');

```
