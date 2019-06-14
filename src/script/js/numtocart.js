$(function() {
    $('.numtocart').on('keyup', function() {
        var a = $('.numtocart').val();
        var b = $('.numtocart').attr('max');
        if (a > b) { $('.numtocart').val(b) }
    })
    $('.reduce').on('click', function() {
        if ($('.numtocart').val() > 0) { $('.numtocart').val(Number($('.numtocart').val()) - 1) }
    })
    $('.plus').on('click', function() {
        if ($('.numtocart').val() < $('.numtocart').attr('max')) { $('.numtocart').val(Number($('.numtocart').val()) + 1) }
    })

    $('#buy').on('click', function() {
        var num = $('.numtocart').val();
        var price = $('.proprc').html().split('￥')[1];
        var title = $('.probt').html();
        var size = $('.on .size').html();
        var src = $('.keng').attr('src');
        var heji = num * price;
        var id = location.search.split('=')[1];
        var ppshop = cookie.get('phone') + 'shop';
        if (cookie.get(ppshop)) {
            var str = cookie.get(ppshop);
            var arr = JSON.parse(str);
            var newArr;
            if (arr.filter((elm, i) => { return elm.id == id }).length > 0) {
                newArr = arr.map((elm, i) => {
                    if (elm.id == id) {
                        elm.num = parseInt(elm.num);
                        elm.price = parseInt(elm.price);
                        elm.num += parseInt(num);
                        elm.heji = elm.num * elm.price
                    }
                    return elm;
                });
                cookie.set(ppshop, JSON.stringify(newArr), 1);
            } else {
                arr.push({ "id": id, "num": num, "price": price, 'title': title, 'size': size, 'src': src, 'heji': heji });
                cookie.set(ppshop, JSON.stringify(arr), 1);
            }
        } else {
            var arr = [{ "id": id, "num": num, "price": price, 'title': title, 'size': size, 'src': src, 'heji': heji }];
            var str = JSON.stringify(arr);
            cookie.set(ppshop, str, 1);
        }
        location.reload();
    })
})