# 이 폴더는 Hooks 폴더입니다.

Hooks를 사용하면 컴포넌트 로직을 함수로 뽑아내어 재사용할 수 있습니다.

```typescript
import useCounter from 'hooks/useCounter';

...

const {number , onIncrease , onDecrease} = useCounter();

...

return (
    <>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
    </>
)
```

위의 방식처럼 사용하실 수 있습니다.
