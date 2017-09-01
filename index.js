function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let liNodes = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < liNodes.length; i++) {
    liNodes[i].innerHTML = parseInt(liNodes[i].innerHTML) + parseInt(n);
  }
}

function deepestChild(){
  let nodes =  document.querySelectorAll('#grand-node div');
  return nodes[nodes.length - 1];
}
