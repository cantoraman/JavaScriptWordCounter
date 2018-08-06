const PubSub = require('../pub_sub.js')

const WordCountView = function(){

};


WordCountView.prototype.countViewUpdate = function (numberOfWords) {
  const displayElement = document.querySelector("#result");
  displayElement.textContent = `Your sentence includes ${displayElement} words. Good for you.`
};

module.export=WordCountView;
