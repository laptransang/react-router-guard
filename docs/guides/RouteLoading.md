# Route Loading
React router guard support loading svg default when route is process, you can change loading you want or set it to null to hide loading animation

```jsx
import { CustomLoading } from './components';

<RouterGuard config={config} loading={null} />

// Or custom loading

<RouterGuard config={config} loading={CustomLoading} />
```
