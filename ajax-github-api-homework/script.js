$(document).ready(function() {
    var searchInput = $('#search');
    var resultsField = $("#results");
    var compiled = _.template('<% _.forEach(inputArray, function(element) { %><div class="well well-sm item"><p>Name: <%- element.full_name %></p><p>Description: <%- element.description %></p><p>Language: <%- element.language %></p><p>Link: <a href="<%- element.url %>"> <%- element.url %></a></p></div><% }); %>');

    searchInput.keyup(function(){

        if (searchInput.val().length >= 3) {
            var searchQuery = "https://api.github.com/search/repositories?q=" + searchInput.val();
            $.get(searchQuery, function(data, status){
                var items = data.items;
                   resultsField.html( compiled({ 'inputArray': items }));
            });
        };

    });


$('#make-gist').on('click',function(){
    var gistName = $('#gist-name').val();
    var gistDesc = $('#gist-description').val();
    var gistBody = $('#gist-body').val();
    var gistPrivacy = $('#gist-privacy').is(":checked");

    var gist = {
        "description": gistDesc,
        "public": gistPrivacy,
        "files": {

        }
    }
    gist.files[gistName] = {
                "content": gistBody
    }

    $.post("https://api.github.com/gists", JSON.stringify(gist), function(data, status){
        var result = '<div class="well well-sm item" style="margin-top:20px"><p>Your gist has been succesfully created. Here is the url:</p><a href="'+data.html_url+'">'+data.html_url+'</a></div>'
        $('#gist-field').append(result);
    });


});


});