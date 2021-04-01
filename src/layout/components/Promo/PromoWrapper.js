import styled from "styled-components";

const PromoWrapper = styled.div`
    scroll-behavior: smooth;
    background: url("./assets/images/promo/bg.png");
    background-size: 100% 100%;
    height: 95%;
    img.main_page_img {
        width: 580px;
        margin-top: 100px;
        display: inline-block;
        padding: 16px;
        margin-left: -110px;

        @media (max-width: 990px) {
            margin: -20px auto 0;
            display: flex;
            background-size: contain;
            width: 60%;
            padding: 16px;
        }
    }

    .huge_title {
        color: #fff;
        max-width: 560px;
        text-shadow: 1px 1px 2px #000;
        padding: 16px;
        font: bold 45px/110% "Exo", sans-serif;

        @media (max-width: 990px) and (min-width: 571px) {
            margin: 0 auto;
            font-size: 60px;
            text-align: center;
        }

        @media (max-width: 570px) {
            font-size: 40px;
            margin: 0 auto;
            text-align: center;
        }
    }

    .promo_left {
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }

    .promo_first {
        height: 100vh;
    }

    .main_page_text {
        color: #fff;
        text-shadow: 1px 1px 2px #000;
        max-width: 420px;
        padding: 20px 16px;
        font: normal 18px/170% "Exo", sans-serif;
        display: inline-block;

        @media (max-width: 990px) and (min-width: 571px) {
            margin: 0 auto;
            font-size: 16px;
            text-align: left;
        }

        @media (max-width: 570px) {
            font-size: 16px;
            display: flex;
            text-align: center;
            max-width: none;
        }
    }

    .promo_bg {
        height: 100%;
        font-family: Exo, sans-serif;
        margin: 0 auto;
        max-width: 1200px;
        scroll-behavior: smooth;
        position: relative;
    }

    .illustration2 {
        position: absolute;
        left: 0;
        width: 150%;
        margin-top: -12%;
        left: -15%;
        z-index: 1;
        vertical-align: middle;
    }

    .man-float {
        width: 160%;
        z-index: 12;
        margin-top: -14%;
        position: absolute;
        left: -16%;
        animation: first 5s infinite;
    }

    .women-float {
        width: 60%;
        position: absolute;
        z-index: 3;
        transform: translateY(65%);
        left: 30%;
        animation: 5s second 1s infinite;
    }

    .coffee-float {
        width: 27%;
        right: -17%;
        position: absolute;
        transform: translateY(50%);
        z-index: 3;
        animation: 6s third 0.7s infinite;
    }

    .pig-float {
        width: 45%;
        position: absolute;
        right: 4%;
        transform: translateY(30px);
        z-index: 2;
        animation: 6s first 0.5s infinite;
    }

    .promo_animation {
        position: relative;
        width: 100%;
    }

    @keyframes first {
        0% {
            transform: translateY(30px);
        }
        50% {
            transform: translateY(20px);
        }
        100% {
            transform: translateY(30px);
        }
    }

    @keyframes second {
        0% {
            transform: translateY(65%);
        }
        50% {
            transform: translateY(70%);
        }
        100% {
            transform: translateY(65%);
        }
    }

    @keyframes third {
        0% {
            transform: translateY(50%);
        }
        50% {
            transform: translateY(55%);
        }
        100% {
            transform: translateY(50%);
        }
    }

    .promo_alignment {
        display: flex;
        justify-content: space-between;

        @media (max-width: 990px) {
            display: block;
        }
    }

    .top_pad {
        padding-top: 40px;
    }

    .wrapper_game {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    h2.promo_title_mid {
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 130%;
        text-align: center;
        color: #4b5d68;
        padding: 50px 0;

        @media (max-width: 990px) and (min-width: 571px) {
            font-size: 30px;
            padding: 30px 0;
        }

        @media (max-width: 570px) {
            font-size: 22px;
            padding: 16px;
        }
    }

    .text_after_title {
        font-family: "Exo", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        color: #4b5d68;
        padding: 20px 30%;

        @media (max-width: 990px) and (min-width: 571px) {
            padding: 10px 20%;
        }

        @media (max-width: 570px) {
            padding: 10px 10%;
        }
    }

    img.full_width {
        width: 70%;
        display: flex;
        margin: 0 auto;
        padding: 16px;
        background-size: contain;

        @media (max-width: 990px) and (min-width: 571px) {
            width: 80%;
        }

        @media (max-width: 570px) {
            width: 100%;
        }
    }
`;

export default PromoWrapper;
