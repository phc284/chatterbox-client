// YOUR CODE HERE:
//http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages

// ### API Keys:
//  * Server: http://parse.atx.hackreactor.com/chatterbox/classes/messages
//  * App ID: 28f10c64a8b1b900a057b74cabaebaf474573436
//  * API Key: 7543f778eede3b2723e3018977563e69738d7c1b

var app = {
  
  
  server: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages', 
   
  init: function() {
    
  },
  send: function(text) {
    $.ajax({
      type: 'POST',
      url: this.server,  
      data: text,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }

    });
  },
  fetch: function() {
    $.ajax({
      type: 'GET',
      url: this.server,
      success: function(messages) {
        //console.log(messages);
        messages.results.forEach(function(obj) {
          //console.log(obj);
          app.renderMessage(obj);
        });
      }
    });
  },
  
  clearMessages: function () {
    $('#chats').empty();
  },
  
  renderMessage: function (obj) {  
    console.log(obj);
    $('#chats').append('<ul class="chat">@' + '<a class="username" href="#">' + obj.username + ': ' + '</a>' + obj.text + '</ul>');
    //$('#chats').append('<ul>' + obj.text + '</ul>');

    //double check to see if supposed to be <p>
  },
  
  renderRoom: function (roomName) {
    $('#roomSelect').append('<div id="' + roomName + '"> </div>');
  },
  
  handleUserNameClick: function() {}

};


$('#send').on('click', function (e) {
  e.preventDefault();
  console.log('clicked');
  var text = $('#text').val();
  app.send(text);
});

