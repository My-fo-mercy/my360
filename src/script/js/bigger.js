;
(
    function() {
        class fangda {
            constructor() {
                this.document = $(document)
                this.lpic = $('.ndf')
                this.zpic = $('.zhan0')
                this.bigdatu = $('#bigdatu img')
                this.sf = $('#sf')
                this.bf = $('#bigdatu')
                this.wrap = $('.wrap')
                this.dingwei = $('#dingwei')
            }
            init() {
                let _this = this
                    // this.document.hover(function() {
                    //     this.chu = $(_this.lpic).eq(0).children().attr('src')
                    //     _this.bigdatu.attr('src', this.chu)
                    // });
                    // _this.bigdatu.attr('src', getsrc)
                this.lpic.on('mousemove', function() {
                    this.getsrc = $(this).children().attr('src')
                    _this.zpic.children().attr('src', this.getsrc)
                })
                this.dingwei.hover(function() {
                    this.datusrc = $(this).children('.gobig').children().attr('src')
                    _this.bigdatu.attr('src', this.datusrc)
                    _this.showout()
                    $(this).on('mousemove', function(e) {
                        _this.zmove(e);
                    });
                    _this.changesize();
                }, function() {
                    _this.showhide()

                });
            }
            showout() {
                this.bigdatu.parent().css('display', 'block')
                this.sf.css('visibility', 'visible')
            }
            showhide() {
                this.bigdatu.parent().css('display', 'none')
                this.sf.css('visibility', 'hidden')
            }
            changesize() {
                this.sf.css({
                    width: this.zpic.width() * this.bf.width() / this.bigdatu.width(),
                    height: this.zpic.height() * this.bf.height() / this.bigdatu.height()
                });
                //求比例：
                this.bili = this.bigdatu.outerWidth() / this.zpic.outerWidth();
            }
            zmove(e) {
                let l = e.pageX - this.wrap.offset().left - this.sf.width() / 2;
                let t = e.pageY - this.wrap.offset().top - this.sf.height() / 2;
                if (l <= 0) {
                    l = 0;
                } else if (l >= this.zpic.outerWidth() - this.sf.outerWidth() + 2) {
                    l = this.zpic.outerWidth() - this.sf.outerWidth() + 2;
                }

                if (t <= 0) {
                    t = 0;
                } else if (t >= this.zpic.outerHeight() - this.sf.outerHeight() + 2) {
                    t = this.zpic.outerHeight() - this.sf.outerHeight() + 2;
                }
                this.sf.css({
                    left: l,
                    top: t
                });
                //给大图赋值位置
                this.bigdatu.css({
                    left: -l * this.bili,
                    top: -t * this.bili
                })
            }
        }
        new fangda().init()
    }
)()