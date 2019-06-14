$(function() {
    $('#shopCartFull .icon').css('background', 'none');
    $('.icon1').on('click', function() {
        if ($(this).hasClass('quanicon')) {
            $('.quanicon').css({
                'background': 'url(http://10.31.164.47/my360/src/img/gou.png) no-repeat',
                'background-size': 'contain'
            })
            $('.iconno').css({
                'background': 'url(http://10.31.164.47/my360/src/img/gou.png) no-repeat',
                'background-size': 'contain'
            })
            $(this).toggleClass('quanicon');
            $('.iconno').removeClass('quanicon')
            $('.icon2').addClass('quxg')
            $('.icon2').removeClass('ylj')
            let ar = $(this).parent().parent().siblings('.cll').children()
            let arr1 = new Array;
            $.each(ar, function(i, val) {
                let zhi = parseInt($(val).children('.cl5').children('.jiaqilai').html())
                arr1.push(zhi)
            })
            var jia = 0;
            $.each(arr1, function(i, val) {
                jia = jia + arr1[i]
            })
            jia = parseInt(jia)
            $('.yuanpr').text(function(i, elm) {
                elm = jia
                elm = parseInt(elm)
                return elm
            })
            $('.bst').text(function(i, elm) {
                elm = jia
                elm = parseInt(elm)
                return elm
            })
        } else {
            $('.icon1').css('background', 'none');
            $('.iconno').css('background', 'none');
            $(this).toggleClass('quanicon');
            $('.iconno').removeClass('quanicon');
            $('.icon2').removeClass('quxg')
            $('.icon2').addClass('ylj')
            $('.yuanpr').text(0);
            $('.bst').text(0);
        }
    })
    $('.icony').on('click', function() {
        if ($(this).children('.iconno').hasClass('quxg')) {
            $('.icon1').addClass('quanicon');
            $(this).children('.iconno').css('background', 'none');
            $(this).children('.iconno').removeClass('quxg')
            $('.icon1').css('background', 'none');
            $(this).children('.iconno').addClass('ylj')
            let jian = $(this).parent().children('.cl5').children('.jiaqilai').html()
            jian = parseInt(jian)
            $('.yuanpr').text(function(i, elm) {
                elm = elm - jian
                elm = parseInt(elm)
                return elm
            })
            $('.bst').text(function(i, elm) {
                elm = elm - jian
                elm = parseInt(elm)
                return elm
            })
        } else {
            // qg = false
            // var cp = $(this).parent().parent().children().children('.cl1')
            // var x = cp.length
            // var bidui = new Array
            //     // console.log(x)
            //     // console.log($(this).parent().parent().children().children('.cl1').children('.icon3'))
            // for (var a = 0; a < x; a++) {
            //     bidui.push(cp.eq(a).children('.icon3').hasClass('quxg'))
            // }

            // $.each(bidui, (i, val) => {
            //     $.each(bidui, (j, value) => {
            //         if (i + 1 < x) {
            //             if (val === value) {} else { return }
            //         }
            //     })
            //     return qg = true
            // })
            // if (qg === true) {
            //     $('.quanicon').css({
            //         'background': 'url(http://10.31.164.47/my360/src/img/gou.png) no-repeat',
            //         'background-size': 'contain'
            //     })
            // }
            // console.log(bidui)
            $(this).children('.iconno').css({
                'background': 'url(http://10.31.164.47/my360/src/img/gou.png) no-repeat',
                'background-size': 'contain'
            })
            $(this).children('.iconno').addClass('quxg')
            $(this).children('.iconno').removeClass('ylj')
            var jia = $(this).parent().children('.cl5').children('.jiaqilai').html()
            jia = parseInt(jia)
            $('.yuanpr').text(function(i, elm) {
                elm = elm - 1 + 1 + jia
                elm = parseInt(elm)
                return elm
            })
            $('.bst').text(function(i, elm) {
                elm = elm - 1 + 1 + jia
                elm = parseInt(elm)
                return elm
            })
        }
    })
})