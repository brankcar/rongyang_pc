/**
 * Created by LHC on 2017-04-04.
 */
$(document).ready(function(){
    var $active = $('.form-nav li.active'),
        $index = $active.index();
    $(document).on('click.modal', '[data-toggle^=#]', function (e) {
        var $this = $(this),
            $id = $this.data().toggle;
        var $ele = $($id);
        $ele.toggle();
        e.stopPropagation();
    }).on('click.href', '[data-href]', function(){
        var $this = $(this),
            $href = $this.data().href,
            _target = $this.data().target;
        if(_target){
            window.open($href);
        }else{
            window.location.href = $href;
        }
    });
    $('.form-nav').on('click','li',function(){
        var _this = $(this),
            _index = _this.index();
        var $box = $('.check-box');
        if(_index === $index){
            return;
        }
        _this.addClass('active');
        $active.removeClass('active');
        $box.eq(_index).addClass('active');
        $box.eq($index).removeClass('active')
        $active = _this;
        $index = _index;
    })
});