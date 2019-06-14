$(function() {
    let ppshop = $.cookie('phone') + 'shop';
    let all = $.cookie(ppshop)
    all = JSON.parse(all)
    let newArr = new Array;
    $.each(all, function(i, val) {
        newArr.push(val.num)
    })
    let allnum = 0;
    $.each(newArr, function(i, val) {
        val = parseInt(val)
        allnum = allnum + val
    })
    $('#cart_num').html(allnum)
})