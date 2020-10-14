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
        num = Math.round(num * 100) / 100;
        $('.outPut .inner').append(`<p>第${$('.outPut .inner p').length + 1}个--><em>${num}<em></p>`);
        $('.result').text(num);
    });
    $('.reast-all').on('click', function () {
        reastAllNum();
    });
    $('.clear-all').on('click', function () {
        reastAllNum();
        $('.outPut .inner').html('');
    });
    $('.copy').on('click', function () {
        const range = document.createRange();
        range.selectNode(document.getElementById("result"));
        const selection = window.getSelection();
        if (selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
    });
    reastAllNum();
})