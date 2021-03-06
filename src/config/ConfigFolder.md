# Config 폴더에서 SERVER값을 사용할때는

```javascript
import { SERVER } from 'config/config.json';

axios.get(`${SERVER}`);
```

위의 방식으로 사용하면 된다.
