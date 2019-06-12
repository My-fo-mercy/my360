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
            var leftpic = JSON.parse(data.leftpic);
            var details = JSON.parse(data.details);
            var num = data.num;
            var zhan1 = `<img src="${toppic[0].src}" alt="${toppic[0].title}" width="105">`;
            var zhan2 = `<img src="${toppic[1].src}" alt="${toppic[1].title}" width="105">`;
            var zhan3 = `<img src="${toppic[2].src}" alt="${toppic[2].title}" width="105">`;
            var zhan4 = `<img src="${toppic[3].src}" alt="${toppic[3].title}" width="105">`;
            var zhan0 = `<img src="${toppic[4].src}" alt="${toppic[4].title}" width="450" class="keng">`;
            var lpic1 = `<img src="${leftpic[0].src}" alt="${toppic[4].title}">`;
            var lpic2 = `<img src="${leftpic[1].src}" alt="${toppic[4].title}">`;
            var lpic3 = `<img src="${leftpic[2].src}" alt="${toppic[4].title}">`;
            var lpic4 = `<img src="${leftpic[3].src}" alt="${toppic[4].title}">`;
            var lpic5 = `<img src="${leftpic[4].src}" alt="${toppic[4].title}">`;
            var details = `<img src="${details[0].src}" alt="${details[0].title}"><img src="${details[1].src}" alt="${details[1].title}"><img src="${details[2].src}" alt="${details[2].title}"><img src="${details[3].src}" alt="${details[3].title}"><img src="${details[4].src}" alt="${details[4].title}"><img src="${details[5].src}" alt="${details[5].title}"><img src="${details[6].src}" alt="${details[6].title}"><img src="${details[7].src}" alt="${details[7].title}"><img src="${details[8].src}" alt="${details[8].title}"><img src="${details[9].src}" alt="${details[9].title}"><img src="${details[10].src}" alt="${details[10].title}"><img src="${details[11].src}" alt="${details[11].title}">`;
            $('.zhan1').html(zhan1);
            $('.zhan2').html(zhan2);
            $('.zhan3').html(zhan3);
            $('.zhan4').html(zhan4);
            $('.zhan0').html(zhan0);
            $('.probt').html(data.title);
            $('.proprc').html('￥' + data.price);
            $('.lpic1').html(lpic1);
            $('.lpic1d').html(leftpic[0].title);
            $('.lpic1p').html('￥' + leftpic[0].price);
            $('.lpic2').html(lpic2);
            $('.lpic2d').html(leftpic[1].title);
            $('.lpic2p').html('￥' + leftpic[1].price);
            $('.lpic3').html(lpic3);
            $('.lpic3d').html(leftpic[2].title);
            $('.lpic3p').html('￥' + leftpic[2].price);
            $('.lpic4').html(lpic4);
            $('.lpic4d').html(leftpic[3].title);
            $('.lpic4p').html('￥' + leftpic[3].price);
            $('.lpic5').html(lpic5);
            $('.lpic5d').html(leftpic[4].title);
            $('.lpic5p').html('￥' + leftpic[4].price);
            $('#p_desc').html(details);
            $('img[src=""]').css('display', 'none')
            $('.numtocart').attr('max', num)
        }
    })
})