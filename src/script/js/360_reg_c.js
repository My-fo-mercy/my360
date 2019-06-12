$(function() {
    var ft1 = false;
    var ft2 = false;
    $('#inpt-pw').on('focusout', function() {
        var ypsd = /^\w{6,17}$/;
        if (ypsd.test($(this).val())) {
            $('.ps-wenti').html('');
            $('.ps-gongxi').css('background-position', '-26px -98px');
            $('.ps2-wenti').html('请重复输入密码').css('color', 'red');
            $('.ps2-gongxi').css('background-position', '-62px -98px');
            ft1 = true;
        } else {
            $('.ps-wenti').html('密码不能少于8位字符，请重新输入').css('color', ' #f36903');
            $('.ps-gongxi').css('background-position', '-62px -98px');
            ft1 = false;
        }
    })
    $('#inpt-phone').on('focusout', function() {
        var phonenum = /^[0-9]{11}$/;
        if (phonenum.test($(this).val())) {
            $.post('http://10.31.164.47/my360/php/getusers.php', {
                "phone": $(this).val()
            }, function(data) {
                var json = $.parseJSON(data);
                console.log(json)
                if (json.has) {
                    $('.e-wenti').html('该账号已注册').css('color', 'red');
                    ft2 = false;
                } else {
                    $('.phone-wenti').html('');
                    $('.phone-gongxi').css('background-position', '-26px -98px');
                    ft2 = true;
                }
            });
        } else {
            $('.phone-wenti').html('手机号格式有误').css('color', ' #f36903');
            $('.phone-gongxi').css('background-position', '-62px -98px');
            ft2 = false;
        }
    })
    $(function() {
        $("#reg-btn").on("click", function() {
            if (ft1 && ft2) {
                $("#zct").submit();
            }
        });
    });
})