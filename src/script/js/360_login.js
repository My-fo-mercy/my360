$(function() {
    $("#dodenglu").on({
        click: function() {
            $.ajax({
                type: "POST",
                url: "../php/360_login.php",
                data: { 'phone': $('.onepho').val(), 'psd': $('.onepsd').val() },
                success: function(result) {
                    console.log(result)
                    if (result == "true") {
                        cookie.set('isLogin', 'true', 1);
                        cookie.set('phone', $('.onepho').val(), 1);
                        location.reload();
                    }
                }
            });
            cookie.remove('isLogin')
            if (cookie.get('isLogin')) {
                cookie.set('phone', $('.onepho').val());
            }
        }
    });
})