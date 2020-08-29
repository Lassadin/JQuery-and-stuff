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

$(function() {
    $('button').click(function() {
        $('#fdiv').append("<p>Hello user!</p>");
});
});

$(function(){
    $('#fdiv').append("<p id='tp'></p>");
});

$(function() {
    $('#sdiv').hover(function() {
        $('#tp').text('About to select a link');
    },
    function() {
        $('#tp').text('');
    })
});