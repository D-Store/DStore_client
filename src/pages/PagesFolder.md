# 이곳은 Pages폴더입니다.

기존의 components 폴더에서 만들었던 컴포넌트들을 하나의 페이지로 모아서 App.ts에 있는 Route에
등록하시면 됩니다.

```typescript
import * as Pages from 'pages';

...

<Route exact path="/">
    <Pages.Main />
</Route>

```

위의 코드형식으로 접근하면 Pages에 접근할 수 있습니다.
