function solution(n, roads, sources, destination) {
  const trees = new Array(n + 1).fill().map(_ => []);

  let answer = [];

  for (let i = 0; i < roads.length; i++) {
    trees[roads[i][0]].push(roads[i][1]);
    trees[roads[i][1]].push(roads[i][0]);
  }

  let shortest = new Array(n + 1).fill(Infinity);

  const BFS = (goal) => {
    shortest[goal] = 0;
    let queue = [goal];
    while (queue.length) {
      let now = queue.shift();
      for (let i = 0; i < trees[now].length; i++) {
        if (shortest[now] + 1 < shortest[trees[now][i]]) {
          shortest[trees[now][i]] = shortest[now] + 1;
          queue.push(trees[now][i]);
        }
      }
    }
  };

  BFS(destination);

  for (const army of sources) {
    if (shortest[army] === Infinity) {
      answer.push(-1);
    } else {
      answer.push(shortest[army]);
    }
  }
  return answer;
}

