/* eslint-disable */

$(function () {


    /*fnSlide();  => 1회만 실행 */

    setInterval(fnSlide,  5000);

    function fnSlide() {   /* 커스텀 함수 시작 */

        $("#shuttleFrame").animate({
                "margin-top": "-300px"
            },
            3000,
            function () {

                $("#shuttleFrame>a:nth-child(1)")
                    .insertAfter("#shuttleFrame>a:nth-child(3)");
                // 슬라이드애니메이션이 종료되면 이미지요소를 갖는
                // 첫번째 a요소가 마지막 a요소 뒤로 이동

                $("#shuttleFrame").css({
                    "margin-top": "0"
                });

            }
        );

    }   /* 커스텀 함수 끝*/



});
