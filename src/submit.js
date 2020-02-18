$(document).ready(function(){
    $('#commentform').on("submit",function(e){
    e.preventDefault();
    $.ajax({
    type: "POST",
    url: "data.php",
    data: {
        'name': $('#name').val(),
        'email': $('#email').val(),
        'comments': $('#comments').val()
        }, 
});
$("#commentform")[0].reset();
});

});