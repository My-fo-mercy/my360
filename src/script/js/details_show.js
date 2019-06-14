$(function() {
    var id = location.search.split('=')[1];
    $.ajax({
        url: 'http://10.31.164.47/my360/php/getproduct.php',
        type: 'post',
        data: { 'id': id },
        dataType: 'json',
        success: function(response) {
            var data = response[0];
            var toppic = JSON.parse(data.toppic);
            var num = data.num;
            var zhan1 = `<img src="${toppic[0].src}" alt="${toppic[0].title}" width="105">`;
            var zhan2 = `<img src="${toppic[1].src}" alt="${toppic[1].title}" width="105">`;
            var zhan3 = `<img src="${toppic[2].src}" alt="${toppic[2].title}" width="105">`;
            var zhan4 = `<img src="${toppic[3].src}" alt="${toppic[3].title}" width="105">`;
            var zhan0 = `<img src="${toppic[4].src}" alt="${toppic[4].title}" width="450" class="keng">`;
            $('.zhan1').html(zhan1);
            $('.zhan2').html(zhan2);
            $('.zhan3').html(zhan3);
            $('.zhan4').html(zhan4);
            $('.zhan0').html(zhan0);
            $('.probt').html(data.title);
            $('.proprc').html('￥' + data.price);
            $('img[src=""]').css('display', 'none')
            $('.numtocart').attr('max', num)
        }
    })
})