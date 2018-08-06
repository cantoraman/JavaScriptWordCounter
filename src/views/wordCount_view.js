const PubSub = require('../pub_sub.js')

const WordCountView = function (){

};

WordCountView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCounter:count', (event) =>{
    const numberOfWords = event.detail;
    this.countViewUpdate(numberOfWords);
  });
};


WordCountView.prototype.countViewUpdate = function (numberOfWords) {
  const displayElement = document.querySelector("#result");
  displayElement.textContent = `Your sentence includes ${numberOfWords} words. Good for you.`;
};

module.exports=WordCountView;
