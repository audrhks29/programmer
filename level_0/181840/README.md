# [level 0] 정수 찾기 181840
## 1. 주소
  [링크](https://school.programmers.co.kr/learn/courses/30/lessons/181840)

## 2. 문제 설명
정수 리스트 `num_list`와 찾으려는 정수 `n`이 주어질 때, `num_list`안에 `n`이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

## 3. 코드
```js
function solution(num_list, n) {
  var answer = 0;
  
  const findNumList = num_list.find(item => item == n)
  findNumList ? answer = 1 : answer = 0

  return answer;
}
```