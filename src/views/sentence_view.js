const PubSub = require('../pub_sub.js')

const SentenceView = function (){

};


SentenceView.prototype.bindEvents = function () {

  const inputSentence = document.querySelector('#text');

  inputSentence.addEventListener('submit', (event)=>{
    const submittedText = event.target.value;
    PubSub.publish('SentenceView:text-submitted', submittedText);
  });

};

module.export = SentenceView;
