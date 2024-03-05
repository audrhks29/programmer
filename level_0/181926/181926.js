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