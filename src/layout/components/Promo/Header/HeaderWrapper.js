import styled from 'styled-components';

const HeaderWrapper = styled.header`
    position: relative;
    z-index: 9999;
    li {
        list-style-type: none;
        width: fit-content;
        padding: 17px;

        @media (max-width: 1035px) and (min-width: 991px) {
            padding: 10px;
        }

        @media (max-width: 990px) {
            padding: 10px 0;
        }

        a {
            text-decoration: none;
            font: normal 16px Exo, sans-serif;
            color: #fff;

            &:hover,
            &:focus,
            &:active {
                color: black;
                text-decoration: none;
            }
        }
    }

    .logo {
        color: #1f54be;
        font: normal 50px "Exo", sans-serif;
    }

    .enter_btn {
        width: 178px;
        height: 48px;
    }

    @media (max-width: 991px) {
        .logo {
            font: normal 30px "Exo", sans-serif;
        }
    }

    .navbar_promo {
        border-color: transparent;
    }

    .navbar_promo:hover,
    .navbar_promo:focus,
    .navbar_promo:active {
        outline: none;
    }
`;

export default HeaderWrapper;
