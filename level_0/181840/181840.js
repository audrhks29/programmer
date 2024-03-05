function solution(num_list, n) {
  var answer = 0;

  const findNumList = num_list.find(item => item == n)
  findNumList ? answer = 1 : answer = 0

  return answer;
}
solution([15, 98, 23, 2, 15], 10)