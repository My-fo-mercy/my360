$(function() {
    var ppshop = cookie.get('phone') + 'shop';
    if (cookie.get(ppshop)) {
        $('#shopCartEmpty').css('display', 'none');
        $('#shopCartFull').css('display', 'block');
    } else {
        $('#shopCartEmpty').css('display', 'block');
        $('#shopCartFull').css('display', 'none');
    }
    var product = cookie.get(ppshop)
    product = JSON.parse(product)
    product.forEach(function(elm, i) {
        var list = `
        <div class="clt clearfix cll lia${elm.id}">
                        <div class="cl1 icony"><span class="icon iconno icon2 icon3 ylj"></span><span></span></div>
                        <div class="cl2 clearfix"><span><img src="${elm.src}" class="cspt"><i class="cspp">${elm.title}</i><i class="csps">${elm.size}</i></span></div>
                        <div class="cl3"><span>${elm.price} 元</span></div>
                        <div class="cl4"><span class="jj clearfix"><span class="recpro" style="width:33px;height:33px">-</span><input type="text" value="${elm.num}" style="width:60px;height:33px" class="liang"><span class="addpro" style="width:33px;height:33px">+</span></span>
                        </div>
                        <div class="cl5"><span class="jiaqilai">${elm.heji} 元</span></div>
                        <div class="cl6"><span class="deleteth">X</span></div>
                        </div>
                `;
        $('.cll').html(function(i, elm) {
            return elm + list
        })
    })
})