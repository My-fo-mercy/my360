$(function() {
    $("#dodenglu").on({
        click: function() {
            $.ajax({
                type: "POST",
                url: "http://10.31.164.47/my360/php/360_login.php",
                data: { 'phone': $('.onepho').val(), 'psd': $('.onepsd').val() },
                success: function(result) {
                    console.log(result)
                    if (result == "true") {
                        // cookie.set('isLogin', 'true', 1);
                        // cookie.set('phone', $('.onepho').val(), 1);
                        $.cookie('isLogin', 'true', { expires: 1 })
                        $.cookie('phone', $('.onepho').val(), { expires: 1 })
                        location.reload();
                    }
                }
            });
            // cookie.remove('isLogin')
            // if (cookie.get('isLogin')) {
            //     cookie.set('phone', $('.onepho').val());
            // }
            cookie.remove('isLogin')
            $.cookie('isLogin', $('.onepho').val(), { expires: -1 })
            if ($.cookie('isLogin')) {
                $.cookie('phone', $('.onepho').val(), { expires: 1 })
            }
        }
    });
})