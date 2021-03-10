# 이 폴더는 Modules 폴더입니다.

Modules 폴더는 Action , Reducer 등을 관리하는 폴더입니다.

#### 이 프로젝트에서는 Redux를 사용하고, Ducks패턴을 사용하지 않습니다.(파일의 구조를 중요시하기 때문)

예를 들어, counter 모듈을 만들고 싶다면

counter
ㄴ counterActions.ts
ㄴ counterReducer.ts
ㄴ counterTypes.ts

이런식으로 파일을 관리하시면 됩니다.

modules의 index.ts파일은 "모든 리듀서를 한 리듀서에 모으는 작업을 진행"합니다.
index.ts에 아래 코드는

```typescript
export type RootState = ReturnType<typeof rootReducer>;
```

나중에 useSelector로 store를 select할때, 타입을 유추하기 위해서 사용합니다
