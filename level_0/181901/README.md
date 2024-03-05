# [level 0] 배열 만들기1 181901
## 1. 주소
  [링크](https://school.programmers.co.kr/learn/courses/30/lessons/181901)

## 2. 문제 설명
정수 `n`과 `k`가 주어졌을 때, 1 이상 `n`이하의 정수 중에서 `k`의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

## 3. 코드
```js
  function solution(n, k) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
      if (n >= k && i % k == 0) answer.push(i)
    }
    return answer;
  }
```