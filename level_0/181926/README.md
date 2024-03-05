# [level 0] 수 조작하기1 181926
## 1. 주소
  [링크](https://school.programmers.co.kr/learn/courses/30/lessons/181926)

## 2. 문제 설명
정수 `n`과 문자열 `control`이 주어집니다. `control`은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, `control`의 앞에서부터 순서대로 문자에 따라 `n`의 값을 바꿉니다.

"w" : `n`이 1 커집니다.
"s" : `n`이 1 작아집니다.
"d" : `n`이 10 커집니다.
"a" : `n`이 10 작아집니다.

위 규칙에 따라 `n`을 바꿨을 때 가장 마지막에 나오는 `n`의 값을 return 하는 solution 함수를 완성해 주세요.

## 3. 코드
```js
function solution(n, control) {
  var answer = 0;
  for (let i = 0; i < control.length; i++) {
    switch (control[i]) {
      case 'w':
        answer += 1; break;
      case 'a':
        answer = answer - 10; break;
      case 's':
        answer -= 1; break;
      case 'd':
        answer = answer + 10; break;
      default:
    }
  }
  answer += n
  return answer;
}
```