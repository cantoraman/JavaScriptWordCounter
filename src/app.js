const SentenceView = require('./views/sentence_view.js');
const WordCountView = require('./views/wordCount_view.js');
const WordCounter = require('./models/wordcounter.js');

document.addEventListener('DOMContentLoaded', () => {


  const sentenceView = new SentenceView();
  sentenceView.bindEvents();

  const wordcountView = new WordCountView;
  wordcountView.bindEvents();

  const wordCounter = new WordCounter();
  wordCounter.bindEvents();

});
