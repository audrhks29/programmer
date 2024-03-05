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

