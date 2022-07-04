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
### 1.2 Source Directory 구조

Demo 프로젝트를 봐도 감이 오질 않는다. 우선 UI쪽 컴포넌트는 /src/components로 TypeScript 기반 class 들은 /src/lib 로 모아서 진행하고 개선해보자.

### 1.3 TypeScript

- 파일 하나에 class 하나만 관리하는 형식으로 관리해보자. 하지만 파일 명은 소문자로 시작해야 한다.
- Primitives(string, number, boolean) data type 에는 null 을 할당할 수 없지만 type 에 or 연산을 이용하면 가능하다.
    ```ts
    let s: string | null;
    ```

...

## 2. 참고

### 2.1 https://www.typescriptlang.org/docs/

### 2.2 https://kit.svelte.dev/docs/routing#pages