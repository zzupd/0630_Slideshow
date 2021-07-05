/* eslint-disable */

$(function () {

    setInterval(fnSlide, 5000);

    function fnSlide() {
        /* 전환형 슬라이드 쇼 시작 */
        $("#slide a:first-child").fadeOut(
            1000,
            function () {
                $("#slide a:first-child")
                    .insertAfter("#slide a:last-child");
            }
        );

        $("#slide a:nth-child(2)").fadeIn(3000);
        /* 전환형 슬라이드 쇼 끝 */
    }


    /*  전환형 적용순서
    1. 첫째(first-child)를 fadeOut(300) 한다.
    1-1. 첫째에 콜백함수(=익명함수)를 만들어 순서를 마지막(.insertAfter)으로
           이동한다.

    2. 둘째(nth-child(2))를 fadeIn(800) 한다.

    참고. $("선택자").animate();  사용하지 않음
    */


});
