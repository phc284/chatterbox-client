// YOUR CODE HERE:
//http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages

// ### API Keys:
//  * Server: http://parse.atx.hackreactor.com/chatterbox/classes/messages
//  * App ID: 28f10c64a8b1b900a057b74cabaebaf474573436
//  * API Key: 7543f778eede3b2723e3018977563e69738d7c1b

var app = {
  
  
  server: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',  
  init: function() {},
  send: function(val) {
    $.ajax({
      type: 'POST',
      url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',  
      data: val
    });
  },
  fetch: function() {
    $.ajax({
      type: 'GET',
      url: this.server
    });
  }

};

