# Baekjoon JavaScript Solutions

이 프로젝트는 [Baekjoon Online Judge](https://www.acmicpc.net/) 웹사이트의 알고리즘 문제들에 대한 JavaScript 솔루션을 저장하고 있습니다.

## 프로젝트 구조

솔루션들은 다음과 같은 폴더 구조로 저장되어 있습니다:

```plaintext
10000/
  11000/
    12345.js
  11100/
    11150.js
20000/
  21000/
    21500.js
...
```

각 솔루션 파일은 해당 문제 번호를 이름으로 가집니다.

## 기능

### 문제 준비하기

특정 문제의 테스트 케이스를 준비하려면 다음 명령어를 사용하세요:

```bash
yarn start XXXXX
```

여기서 `XXXXX`는 준비하고자 하는 문제의 번호입니다.

### 테스트 실행하기

준비된 테스트 케이스로 솔루션을 테스트하려면 다음 명령어를 사용하세요:

```bash
yarn test
```

## 시작하기

1. 이 저장소를 클론합니다:

   ```bash
   git clone https://github.com/kadragon/acmicpc_javascript.git
   ```

2. 프로젝트 디렉토리로 이동합니다:

   ```bash
   cd acmicpc_javascript
   ```

3. 필요한 의존성을 설치합니다:

   ```bash
   yarn install
   ```

4. 원하는 문제의 테스트 케이스를 준비합니다:

   ```bash
   yarn start 12345
   ```

5. 솔루션을 작성하고 테스트를 실행합니다:

   ```bash
   yarn test
   ```

## 기여하기

Javascript 문제 풀이라면 얼마든지 기여하실 수 있습니다. 폴더 구조만 지켜주세요.
