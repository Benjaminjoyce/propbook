//side bar
$('.ui.sidebar').sidebar({
    context: $('.ui.pushable.segment'),
    transition: 'overlay'
}).sidebar('attach events', '#mobile_item');

console.log("script.js is here")

//sticky menu
$('.ui.sticky')
    .sticky();

$(document).ready(function() {

    $('#b-tabs div:not(:first)').addClass('b-inactive');
    $('.b-tabs-container').hide();
    $('.b-tabs-container:first').show();

    $('#b-tabs div').click(function() {
        var t = $(this).attr('id');
        if ($(this).hasClass('b-inactive')) { //this is the start of our condition 
            $('#b-tabs div').addClass('b-inactive');
            $(this).removeClass('b-inactive');

            $('.b-tabs-container').hide();
            $('#' + t + 'C').fadeIn(700);
            console.log($('#' + t + 'C'))
        }
    });

});

// $(document).ready(function() {
//     $('#b-tabs div').addClass('b-mouseO');

//     $('#b-tabs div').hover(function() {
//         var t = $(this).attr('id');
//         if ($(this).hasClass('b-mouseO')) {
//             $('#b-tabs div').addClass('b-mouseO');
//             $(this).removeClass('b-mouseO');
//         }
//     })

// });