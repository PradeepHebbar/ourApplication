jQuery(document).ready(function ($) {
    $("#submit").click(function () {
        var data = {};
        data.user_name = $("input#username").val();
        data.password = $("input#password").val();
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: '/login',
            success: function (data) {
                window.location = "/about";
            }
        });
    });
})