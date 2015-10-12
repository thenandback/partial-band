'use strict';

$(function() {

  $('button').click(function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      $('#adjective').text(adjective);
    });

    $.get('verb', function(response) {
      var verb = response.word;
      $('#verb').text(verb);
    });

    $.get('noun', function(response) {
      var noun = response.word;
      $('#noun').text(noun);
    });

  });

  $('#submitWords').on('submit', function(e) {
    e.preventDefault();

    var adjective = $('input[name=adjective]').val().trim();
    var verb = $('input[name=verb]').val().trim();
    var noun = $('input[name=noun]').val().trim();
    var adjPost;
    var verbPost;
    var nounPost;

    $('#adjectiveRes').text('');
    $('#verbRes').text('');
    $('#nounRes').text('');

    if (adjective) {
      adjPost = {word: adjective};
      $.post('adjective', adjPost, function(response) {        
        $('#adjectiveRes').text(response.msg);
      });
    }

    if (verb) {
      verbPost = {word: verb};
      $.post('verb', verbPost, function(response) {
        $('#verbRes').text(response.msg);
      });
    }

    if (noun) {
      nounPost = {word: noun};
      $.post('noun', nounPost, function(response) {        
        $('#nounRes').text(response.msg);
      });
    }

    $('input[name=adjective]').val('');
    $('input[name=verb]').val('');
    $('input[name=noun]').val('');
    
  });

});
