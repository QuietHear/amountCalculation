$(document).ready(() => {
    let yuan = [10000, 5000, 1000, 100, 50, 20, 10, 5, 1],
        jiao = [5, 1],
        fen = [5, 1];
    function initForm() {
        yuan.forEach((item) => {
            $('.form form').append(`<div class="item">
            <span>${item}元:</span>
            <input type="number" attr-num="${item}">
            <button class="reast">重置</button>
            </div>`);
        });
        jiao.forEach((item) => {
            $('.form form').append(`<div class="item">
            <span>${item}角:</span>
            <input type="number" attr-num="${item/10}">
            <button class="reast">重置</button>
            </div>`);
        });
        fen.forEach((item) => {
            $('.form form').append(`<div class="item">
            <span>${item}分:</span>
            <input type="number" attr-num="${item/100}">
            <button class="reast">重置</button>
            </div>`);
        });
    }
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
    // 单个输入框输入重置
    $('.reast').on('click', function () {
        $(this).prev().val(0);
    });
    // 计算一次上面输入结果
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
    // 清空上面输入框内容
    $('.reast-all').on('click', function () {
        reastAllNum();
    });
    // 清空页面所有内容
    $('.clear-all').on('click', function () {
        reastAllNum();
        $('.outPut .inner').html('');
    });
    // 计算额外加加减减后的结果
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
    initForm();
    reastAllNum();
})