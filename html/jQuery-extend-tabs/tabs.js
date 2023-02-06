// function liclick() {
//     $(this).addClass('active').siblings().removeClass('active')
//     var index = $(this).index()
//     $('.box li').removeClass('active').eq(index).addClass('active')
// }
// $('.header li').click(liclick)
$.fn.extend({
    tabs: function (index) {
        var oli = this.find('.header li')
        var obox = this.find('.box li')
        // console.log(this)
        // console.log(oli)
        // console.log(obox)
        oli.eq(index).addClass('active')
        obox.eq(index).addClass('active')
        function liclick() {
            // oli.click(function () {
            $(this).addClass('active').siblings().removeClass('active')
            var index = $(this).index()
            obox.removeClass('active').eq(index).addClass('active')
        }
        oli.click(liclick)
    }
})