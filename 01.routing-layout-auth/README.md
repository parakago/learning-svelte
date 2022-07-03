## 0. 목표

### 0.1 SvelteKit Routing 개념 이해
### 0.2 간단한 로그인 구현 및 Layout 이용해 역할별 접근 가능한 페이지 구성 해보기
### 0.3 TypeScript, Svelte 사용법 배워보기

## 1. 배운것

### 1.1 import 참조경로 간결하게 (Alias)

tsconfig.json의 compilerOptions paths를 수정하면 '../../../lib'를 `'$lib'`로 참조할 수 있다.

```json
...
"compilerOptions": {
    ...
    "paths": {
        "$lib": ["src/lib"],
        "$lib/*": ["src/lib/*"],
        ...
    }
}
```

## 2. 

