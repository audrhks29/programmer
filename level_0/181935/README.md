# [level 0] 홀짝에 따라 다른 값 반환하기 181935
## 1. 주소
  [링크](https://school.programmers.co.kr/learn/courses/30/lessons/181935)

## 2. 문제 설명
양의 정수 `n`이 매개변수로 주어질 때, `n`이 홀수라면 `n` 이하의 홀수인 모든 양의 정수의 합을 return 하고 `n`이 짝수라면 `n` 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

## 3. 코드
```js
function solution(n) {
  let answer = 0;
  let odd = 0;
  let even = 0;
  let num = n;
  for (n; n >= 1; n--) {
    n % 2 === 0 ? even += n ** 2 : odd += n
  }
  answer = num % 2 === 0 ? even : odd
  return answer;
}
```