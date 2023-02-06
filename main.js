$(function() {
    console.log("Working")
    $('.mobile-trigger').on('click', function() {
        $(this).toggleClass('active')
        $('.category-menu').toggleClass('active')
    })

    $('.nav-close').on('click', function() {
        $(this).toggleClass('active')
        $('.category-menu').toggleClass('active')
    })
})