function Model() {

}

function View(model) {
    var self = this;

    self.openModalPopup = function() {
        $('.popup').show()
    }
    self.closeModalPopup = function() {
        $('.popup').hide()
    }

    self.setNavBtnActive = function(num) {
        $('.nav').removeClass('active');
        $('.nav-' + num).addClass('active')
    }

}

function Controller(model, view) {
    (function onInit() {
        checkWindowSize();
        checkScroll();
    })();
    
    $(window).on('resize', checkWindowSize);
    $(document).delegate('.menu-btn', 'click', navigateScroll);
    //mobile
    $('.openPopup').on('click', view.openModalPopup);
    $('.popup').on('click', view.closeModalPopup);
    $('.closeNotif').on('click', view.closeModalPopup);
    $('.menu-btn').on('click', view.navigateScroll);
    
    function navigateScroll() {
        var to = $(this).val();
        var h = document.documentElement.clientHeight;
        $(window).scrollTop(+to * h + 1);
        return checkScroll();
    }

    function checkWindowSize() {
        var h = document.documentElement.clientHeight
        var w = document.documentElement.clientWidth
        var resize = $('.resize')
        if ((w / h) < 2) {
            resize.removeClass('resize-x')
        } else {
            resize.addClass('resize-x')
        }
    };

    function checkScroll() {
        var h = document.documentElement.clientHeight
        var scr = $(window).scrollTop();
        if (scr >= 3 * h) return view.setNavBtnActive(3)
        if (scr >= 2 * h) return view.setNavBtnActive(2)
        if (scr >= 1 * h) return view.setNavBtnActive(1)
        return view.setNavBtnActive(0)
    }

}

$(function () {
    var model = new Model();
    var view = new View(model);
    var controller = new Controller(model, view);
});



$(document).ready(function () {
    //slider
    $('.slider').slick({
        dots: true
    })
    //chart
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Charts of the mounth",
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 25, 20, 30, 45],
            }]
        },

        // Configuration options go here
        options: {}
    });
    
    // function checkWindowSize() {
    //     var h = document.documentElement.clientHeight
    //     var w = document.documentElement.clientWidth
    //     var resize = $('.resize')

    //     if ((w/h) < 2) {
    //         resize.removeClass('resize-x')
    //     } else {
    //         resize.addClass('resize-x')
    //     }
    // };

    

    // $(window).on('resize', function() {
    //     checkWindowSize()
    // } )

    // $('.menu-btn').on('click', function() {
    //     var to = $(this).val();
    //     var h = document.documentElement.clientHeight
    //     $(window).scrollTop(+to * h + 1)

    //     return checkScroll()
    // })

    // $(window).on('scroll', function() {
    //     return checkScroll()
    // })

    // function checkScroll() {
    //     var h = document.documentElement.clientHeight
    //     var scr = $(window).scrollTop();
    //     if (scr >= 3 * h) return setNavBtnActive(3)
    //     if (scr >= 2 * h) return setNavBtnActive(2)
    //     if (scr >= 1 * h) return setNavBtnActive(1)
    //     return setNavBtnActive(0)
    // }

    // function setNavBtnActive(num) {
    //     $('.nav').removeClass('active');
    //     $('.nav-' + num).addClass('active')
    //     console.log(num)
    // }

    // (function onInit() {
    //     checkWindowSize()
    //     checkScroll()
    // })();

    

});

