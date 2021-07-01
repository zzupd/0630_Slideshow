/* eslint-disable */

$(function () {

//    fnSlide();    // 함수의 호출 = 함수의 내부 코드가 실행된다!


    setInterval(fnSlide, 5000);    // 일정시간마다 반복

    function fnSlide() { // 함수의 정의

        /* 슬라이드 쇼 애니메이션 코드 시작 */
        $("div#shuttleFrame").animate({
                "margin-left": "-780px"
            },
            3000,
            function () {
                $("#shuttleFrame>a:nth-child(1)")
                    .insertAfter("#shuttleFrame>a:nth-child(3)");
                $("#shuttleFrame").css({
                    "margin-left": "0"
                });
            }
        );
        /* 슬라이드 쇼 애니메이션 코드 끝 */

    }   // 커스텀 함수 끝





});
