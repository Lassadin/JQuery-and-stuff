//  Exercise 1

    $(function(){
        $('#fp').remove();
    });

    $(function(){
        $('p').attr('id', 'test');
    });

    $(function(){
        $('#fdiv').css("background-color", "gray");
    });

    $(function(){
        $('#fdiv').css("color", "white");
    });

//Exercise 2

    $(function() {
        $('button').click(function() {
            $('#fdiv').append("<p>Hello user!</p>");
    });
    });

//Exercise 3

$(function(){
    $('#fdiv').append("<p id='4p'></p>");
});

$(function() {
    $('#sdiv').hover(function() {
        $('#4p').text('About to select a link');
    },
    function() {
        $('#4p').html('&nbsp;')
    })
});