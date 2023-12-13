// JavaScript




// jQuery
$(document).ready(function () {
    // $('button').click(function () {
    //     alert('jQuery is working!');
    // })

    $('#s_btn').on('click', function () {
        alert('jQuery is working!');
    })

    $('#show_btn').on('click', function () {
        $('#sh_h2').show();
    })

    $('#hide_btn').on('click', function () {
        $('#sh_h2').hide();
    })

    $('#toggle_btn').on('click', function () {
        $('#sh_h2').toggle();
    })

    $('#f_in_btn').on('dblclick', function () {
        $('#f_h2').fadeOut();
    })

    $('#f_out_btn').on('dblclick', function () {
        $('#f_h2').fadeIn();
    })

    $('#f_toggle_btn').on('dblclick', function () {
        $('#f_h2').toggle();
    })

    // question ans
    $('.ques').on('click', function () {
        $('.ans').slideToggle();
    })
    // stop scrool
    $("#flip").on('click', function () {
        $("#panel").slideDown(5000);
    });
    $("#stop").on('click', function () {
        $("#panel").stop();
    })
});