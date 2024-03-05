# [level 0] 카운트 업 181920
## 1. 주소
  [링크](https://school.programmers.co.kr/learn/courses/30/lessons/181920)

## 2. 문제 설명
정수 `start_num`와 `end_num`가 주어질 때, `start_num`부터 `end_num`까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

## 3. 코드
```js
function solution(start_num, end_num) {
  var answer = [];
  for (let i = start_num; i <= end_num; i++) {
    answer.push(i)
  }
  return answer;
}
```