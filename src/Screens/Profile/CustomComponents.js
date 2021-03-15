import styled from 'styled-components';

export const ProfileContainer = styled.section`
    background-image: none;
    text-align: center;
    color: #ffffff;
    background-color: #333333;
`
export const ProfileBody = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    min-height: 1167px;
    
    :before {
      content: '';
      display: table;
    }
    :after {
      clear: both;
    }
    
    @media (min-width: 1200px) {
    width: 1140px;
     }
     @media (min-width: 992px) and (max-width: 1199px) {
      min-height: 1180px;
      width: 940px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      min-height: 1150px;
      width: 720px;
    }
    @media (min-width: 576px) and (max-width: 767px) {
      width: 540px;
      min-height: 1009px;
    }

    @media (max-width: 575px) {
      width: 340px;
    }
    
    @media (max-width: 1199px) {
      min-height: 942px;
    }
`

export  const BackDrop1 = styled.p`
    opacity : 0.3;
    color: #f1f1f1;
    margin: 164px 293px 0 676px;
    word-wrap: break-word;
    position: relative;
      
    @media (max-width: 1199px) {
      width: auto;
      margin-top: 147px;
      margin-right: 278px;
      margin-left: 491px;
    }
    @media (max-width: 991px) {
      margin-top: 104px;
      margin-right: 405px;
      margin-left: 145px; 
    }
    @media (max-width: 767px) {
      margin-top: 98px;
      margin-right: 303px;
      margin-left: 66px;
    }
    @media (max-width: 575px) {
      margin-top: 76px;
      margin-right: 170px;
      margin-left: 0;
      
    }
`

export  const BackDropUltraH1 = styled.h1`
     opacity : 0.3;
     color: #f1f1f1;
     
     position: relative;
     font-size: 9.375rem;
     font-weight: 700;
      text-transform: uppercase;
      font-style: italic;
      margin: 119px 432px 0 63px;
      
      @media (max-width: 1199px) {
      font-size: 6.875rem;
      width: auto;
      margin-top: 125px;
      margin-right: 310px;
      margin-left: 0;
      }
      @media (max-width: 991px) {
        margin-top: 292px;
        margin-right: 63px;
        margin-left: 36px;
      }
      @media (max-width: 767px) {
      margin-top: 296px;
      margin-right: 21px;
      margin-left: 58px;
      }
      @media (max-width: 575px) {
      font-size: 3.4375rem;
      margin-top: 267px;
      margin-left: 21px;
      }
`