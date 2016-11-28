function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("div#nested div.target")
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll("ul.ranked-list li")
  for (let i = 0, l = ranks.length; i < l; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML, 10) + n
  }
  return ranks
}
  //  var parsedRank = function() {
  //    parseInt((ranks[i].innerHTML), 10)
  //  (parsedRank + n).toString()


// function increaseRankBy(n) {
//  var ranks = document.querySelectorAll("ul.ranked-list")
//  var firstList = rankedLists[0]
//  var secondList = rankedLists[1]
// }

function deepestChild() {
  var boo = document.querySelector("#grand-node div div div div")
  return boo
}
