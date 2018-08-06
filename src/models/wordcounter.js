
const WordCounter = function (){
}

WordCounter.prototype.bindEvents = function () {

};




WordCounter.prototype.countWords = function (sentence) {
  return sentence.split(" ").length
};




module.export = WordCounter;
