import styled from 'styled-components';

const FeatureWrapper = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 850px) {
    width: 100%;
  }

  img {
    position: relative;
    background-size: contain;
    padding: 16px;
  }

  h6 {
    top: 10%;
    right: 5%;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 130%;
    color: #212353;

    @media (max-width: 570px) {
      font-size: 22px;
      right: 10%;
      left: unset;
      max-width: 60%;
      text-align: right;
    }
  }
  
  p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  color: #4B5D68;
  
  @media (max-width: 450px) {
    height: 90px;
    overflow-y: scroll;
    font-size: 14px;
    top: 45%;
    padding-right: 5px;
    }

  }
`;

export default FeatureWrapper;
