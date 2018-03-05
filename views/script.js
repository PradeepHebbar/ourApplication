//Wait to load the page completly
jQuery(document).ready(function ($) {
    //Calls after clicking the login button
    $("#submit").click(function () {
        var data = {};
        //Read input from the text boxes based on ID
        data.user_name = $("input#username").val();
        data.password = $("input#password").val();
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: '/login',
            //Setting the data to request
            data: JSON.stringify(data),
            success: function (response) {
                //Loading the about page on success
                if(response.statusCode == 200){
                    window.location = "/homePage";
                }else{
                    window.location = "/404";
                }
            },
            error: function (err) {
                window.location = "/404";
                console.log("err", err)
            },
        });
    });
})