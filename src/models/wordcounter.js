const PubSub = require('../pub_sub.js');

const WordCounter = function (){

}

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('SentenceView:text-submitted', (event) => {
    const sentence = event.detail
    const count = this.countWords(sentence);
    PubSub.publish('WordCounter:count', count)
  });
};

WordCounter.prototype.countWords = function (sentence) {
  return sentence.split(" ").length
};

module.exports = WordCounter;
