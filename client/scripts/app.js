// YOUR CODE HERE:
//http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages

// ### API Keys:
//  * Server: http://parse.atx.hackreactor.com/chatterbox/classes/messages
//  * App ID: 28f10c64a8b1b900a057b74cabaebaf474573436
//  * API Key: 7543f778eede3b2723e3018977563e69738d7c1b

var app = {
  
  
  server: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages', 
   
  init: function() {
    
    app.fetch();
    app.handleSubmit();
    app.handleUsernameClick();
    
  },
  
  handleSubmit: function() {
    
    $('#send').on('click', function (e) {
      console.log('clicked');
      var text = $('#text').val();
      var username = window.location.search.slice(window.location.search.indexOf('=') + 1);
      var message = {
        username: username,
        text: text,
        roomname: undefined
      };
      app.send(message);
      e.preventDefault();
    });
  },
  
  send: function(message) {
    $.ajax({
      type: 'POST',
      url: this.server,  
      data: message,
      contentType: 'application/json',
      
      success: function (message) {
        console.log('chatterbox: Message sent');
      },
      error: function (message) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', message);
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
          console.log(obj);
          app.renderMessage(obj);
        });
      }
    });
  },
  
  clearMessages: function () {
    $('#chats').empty();
  },
  
  renderMessage: function (obj) {  
    //console.log(obj);
    $('#chats').append('<ul class="chat">@' + '<a class="username" href="#">' + obj.username + ': ' + '</a>' + obj.text + '</ul>');
    //$('#chats').append('<ul>' + obj.text + '</ul>');

    //double check to see if supposed to be <p>
  },
  
  renderRoom: function (roomName) {
    $('#roomSelect').append('<div id="' + roomName + '"> </div>');
  },
  
  handleUsernameClick: function() {
    $('a').on('click', function(e) {
      alert('clicked');
    });
  }

};

//Work on fixing send error 400
//Need to fix 'handleUsernameClick', event handler not working when clicking on username
//Work on adding friends to current user
//Work on adding a roomName drop down and adding new rooms



