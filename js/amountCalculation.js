$(document).ready(() => {
    function reastAllNum() {
        $('.form .item').each(function () {
            $(this).find('input').val(0);
        });
    }
    $('body').on('focus', 'input', function () {
        if ($(this).val() === '0') {
            $(this).val('');
        }
    });
    $('body').on('blur', 'input', function () {
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
        $('.outPut .inner').append(`<p>
        <span class="title">第${$('.outPut .inner p').length + 1}个--></span>
        <em class="first">${num}</em>
        +
        <input type="number" value="0">
        <em class="second hide"></em>
        <span class="hide">=</span>
        <em class="end hide">111</em>
        </p>`);
        $('.result').text(num);
    });
    $('.reast-all').on('click', function () {
        reastAllNum();
    });
    $('.clear-all').on('click', function () {
        reastAllNum();
        $('.outPut .inner').html('');
    });
    $('.compute-finally').on('click', function () {
        $('.outPut .inner p').each(function () {
            let first = parseFloat($(this).find('.first').text()),
                second = parseFloat($(this).find('input').val()),
                end = Math.round((first + second) * 100) / 100
            $(this).find('.second').text(second);
            $(this).find('.end').text(end);
            $(this).find('.hide').each(function () {
                $(this).removeClass('hide');
            });
            $(this).find('input').addClass('hide');
        });
    });
    reastAllNum();
})