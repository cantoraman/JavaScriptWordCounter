const PubSub = require('../pub_sub.js')

const SentenceView = function (){

};

SentenceView.prototype.bindEvents = function () {

  const inputSentence = document.querySelector('#wordcounter-form');

  inputSentence.addEventListener('submit', (event)=>{
    event.preventDefault();
    let formText = document.querySelector('#text');
    PubSub.publish('SentenceView:text-submitted', formText.value);
  });










};

module.exports = SentenceView;
