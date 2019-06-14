$(function() {
    var ppshop = cookie.get('phone') + "shop";
    $('.recpro').on('click', function() {
        $(this).siblings('.liang').val(function() {
            return $(this).val() - 1;
        })
        if (cookie.get(ppshop)) {
            var shopCookie = cookie.get(ppshop);
            var arr = JSON.parse(shopCookie);
            var newArr;
            var p = $(this).parent().parent().siblings('.cl2').children().children('.cspp').eq(0).html();
            console.log($(this).parent().parent().siblings('.cl5').children().html())
            newArr = arr.map((val, i) => {
                val.num = parseInt(val.num);
                val.price = parseInt(val.price);
                val.num = val.num - 1;
                val.heji = val.num * val.price
                return val;
            });
            $.each(newArr, (i, val) => {
                if (val.title === p) {
                    $(this).parent().parent().siblings('.cl5').children().html(val.heji + ' 元')
                }
            })
            cookie.set(ppshop, JSON.stringify(newArr), 1);
        }
    })
    $('.addpro').on('click', function() {
        $(this).siblings('.liang').val(function() {
            return $(this).val() - 1 + 2;
        })
        if (cookie.get(ppshop)) {
            var shopCookie = cookie.get(ppshop);
            var arr = JSON.parse(shopCookie);
            var newArr;
            var p = $(this).parent().parent().siblings('.cl2').children().children('.cspp').eq(0).html();
            newArr = arr.map((val, i) => {
                val.num = parseInt(val.num);
                val.price = parseInt(val.price);
                val.num = val.num + 1;
                val.heji = val.num * val.price
                return val;
            });
            $.each(newArr, (i, val) => {
                if (val.title === p) {
                    $(this).parent().parent().siblings('.cl5').children().html(val.heji + ' 元')
                }
            })
            cookie.set(ppshop, JSON.stringify(newArr), 1);
        }
    })
    $('.deleteth').on('click', function() {
        if (cookie.get(ppshop)) {
            var shopCookie = cookie.get(ppshop);
            var arr = JSON.parse(shopCookie);
            var newArr;
            var p = $(this).parent().parent().children('.cl2').children().children('.cspp').eq(0).html();
            newArr = arr.filter((elm, i) => {
                return p != elm.title;
            });
            cookie.set(ppshop, JSON.stringify(newArr), 1);
        }
        $(this).parent().parent().remove();
    })
})