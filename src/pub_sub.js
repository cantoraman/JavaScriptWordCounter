const PubSub = {
  publish: function(channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    }); //CustomEvent is DOM thing
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback) {
    //// button.addEventListener('click', ()=>{ very much like this
    document.addEventListener(channel, callback);
  }
}


module.exports = PubSub;
