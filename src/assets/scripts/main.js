$(document).ready(function () {
    setTimeout(function () {
        $('body').css('opacity', 1)
    }, 1000)

    function unveilImages() {
        $('.lazy').unveil(1000, function () {
            $(this).on('load', function () {
                this.style.opacity = 1
            })
        })
    }

    $('#showreel').hover(function (e) {
        e.preventDefault()
    })

    $('#hero-cta-button').click(function () {
        $('.collapse').collapse()
    })

    $('.collapse-container').hover(function () {
        console.log('collapse container hovered')
        console.log($(this).attr('data-primary-color'))
        $('html').css(
            'background-color',
            $(this).attr('data-primary-color')
        )
    })

    unveilImages()
})
