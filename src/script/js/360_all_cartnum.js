$(function() {
    var ppshop = cookie.get('phone') + 'shop';
    var all = cookie.get(ppshop)
    console.log(all)
    var all = JSON.parse(all)
    var newArr = new Array;
    $.each(all, function(i, val) {
        newArr.push(val.num)
    })
    var allnum = 0;
    $.each(newArr, function(i, val) {
        val = parseInt(val)
        allnum = allnum + val
    })
    console.log(allnum)
    $('#cart_num').html(allnum)
})