function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let lists = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < lists.length; i++) {
    let num = parseInt(lists[i].innerHTML);
    lists[i].innerHTML = num + n;
  }
}

function deepestChild() {
  let nodes = document.querySelectorAll('div#grand-node div')
  return nodes[nodes.length - 1]
}
