import styled from 'styled-components';
import {Link} from 'react-scroll';
import '../../App.css';

export const LandingContainer = styled.div`
    background : #1d1d1d;
    transition : all 0.4s ease-in-out;
    display : flex;
    justify-content : center;
    height: 800px;
    z-index : 1;
    position : relative;
    align-items : center;
    
    :before {
      position: absolute;
      
    }
    
    @media screen and (max-width : 760px){
        height: 700px;
        
    } 
    @media screen and (max-width: 460px){
        height: 700px;
        
    } 
    
    @media screen and (max-height: 460px){
        height: 600px;
        
    } 
`

export const BackgroundSection = styled.div`
    
`

export const LandingSection = styled.div`
    z-index : 3;
    max-width : 1200px;
    position : absolute;
    padding : 6px 24px;
    display : flex;
    flex-direction : column;
    align-items : center;
`

export const Header1 = styled.h1`
    color : #ffff;
    font-size : 50px;
    text-align : center;
    font-family: 'Mitr', sans-serif;
    transition : all 0.4s ease-in-out;
    align-items: start;
    
    @media screen and (max-width : 760px){
        font-size : 40px;
        
    } 
    @media screen and (max-width: 460px){
        font-size : 32px;
        
    } 
    
`

export const Header2 = styled.h1`
    color : #ffff;
    font-size : 47px;
    font-family: 'Mitr', sans-serif;
    transition : all 0.4s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    
    
    @media screen and (max-width : 760px){
        font-size : 35px;
        transition : all 0.4s ease-in-out;
        
    } 
    @media screen and (max-width: 460px){
        font-size : 25px;
        flex-wrap: wrap;
        transition : all 0.4s ease-in-out;
    } 
    
`

export const TextArea = styled.p`
        font-family : 'Bungee Outline',serif;
        padding : 1px;
        display: table-cell;
        &:hover {
            background-image: linear-gradient(45deg, #fc354c,#0abfbc);
            background-size: 90%;
            background-repeat: repeat; 
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            
        },

`

export const Cursor = styled.div`

      background: #ccc;
      line-height: 17px;
      
      -webkit-animation: 1s blink step-end infinite;
      animation: 1s blink step-end infinite;
      width: 7px;
      height: 32px;
      
      @media screen and (max-width : 760px){
        height : 26px;
        
      } 
      @media screen and (max-width: 460px){
        height : 20px;
        
      } 
      

`

export const ThePara = styled.p`
    margin-top: 24px;
    color : #fff;
    font-size : 28px;
    text-align : center;
    max-width : 600px;
    font-family: 'DotGothic16', sans-serif;
    transition : all 0.4s ease-in-out;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    @media screen and (max-width : 760px){
        font-size : 23px;
        
    } 
    @media screen and (max-width: 460px){
        font-size : 16px;
        flex-wrap: wrap;
    } 
    
`
export const LandingButton = styled(Link)`
     
     border-radius: 50px;
     white-space : nowrap;
     padding : 3px 40px;
     
     font-size : 18px;
     outline : none;
     border : 1px solid grey;
     cursor : pointer;
     display : flex;
     justify-content : center;
     align-items : center;
    background-size: 100%;
    background: linear-gradient(45deg, #00d2ff,#3a7bd5) repeat;
    -webkit-background-clip: text;   
     transition : all 0.4s ease-in-out;
     
   &:hover{
    transition : all 0.4s ease-in-out;
    background: #e6dada;
    box-shadow : 0 0 7px #00d2ff, 0 0 7px #3a7bd5 ;
    font-weight: bolder; 
   }
   
   @media screen and (max-width : 760px){
        font-size : 16px;
        padding : 2px 35px;
        
    } 
    @media screen and (max-width: 460px){
        font-size : 13px;
        padding : 2px 35px;
    } 
   
`
export const ButtonText = styled.p`
    background-color: red;
    background-image: linear-gradient(45deg, #00d2ff,#3a7bd5);
    background-size: 90%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
  
   
`
