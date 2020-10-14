$(document).ready(() => {
    function reastAllNum() {
        $('.form .item').each(function () {
            $(this).find('input').val(0);
        });
    }
    $('input').on('focus', function () {
        if ($(this).val() === '0') {
            $(this).val('');
        }
    });
    $('input').on('blur', function () {
        if ($(this).val() === '') {
            $(this).val(0);
        }
    });
    $('.reast').on('click', function () {
        $(this).prev().val(0);
    });
    $('.submit').on('click', function () {
        let num = 0;
        $('.form .item').each(function () {
            num += parseFloat($(this).find('input').attr('attr-num')) * parseInt($(this).find('input').val());
        });
        $('.outPut .inner').append(`<p>第${$('.outPut .inner p').length + 1}个--><em>${num}<em></p>`);
    });
    $('.reast-all').on('click', function () {
        reastAllNum();
    });
    $('.clear-all').on('click', function () {
        reastAllNum();
        $('.outPut .inner').html('');
    });
    reastAllNum();
})