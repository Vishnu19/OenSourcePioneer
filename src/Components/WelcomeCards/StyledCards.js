import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const CardContainer = styled.div`
background : #181818;
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
        height: 1000px;
        
    } 
    @media screen and (max-width: 460px){
        height: 1100px;
        
    } 
    
    @media screen and (max-height: 460px){
        height: 500px;
        
    } 
`

export const CardWrapper = styled.div`
    max-width: 1000px;
    margin:  0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 45px;
    padding: 0 50px;
    
     @media screen and (max-width: 660px){
        grid-template-columns: 1fr ;
        padding: 0 20px;
        transition: all 0.6s ease-in;
    } 
`

export  const  CardSection = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    max-height: 450px;
    padding: 30px;
    transition: all 0.2s ease-in;
    
    &:hover{
      //transform: rotate(5deg);
      //transition: all 0.4s ease-in-out;
      cursor: pointer;
    }
    
    @media screen and (max-width : 760px){
        height: 300px;
        width: 350px;
    } 
    
    
    @media screen and (max-height: 460px){
         height: 300px;
          width: 350px;
        
    } 
    
`

export const CardImage = styled.div`
    height: 300px;
    margin-bottom: 30px;
    align-items: center;
    border-radius: 20px;
    @media screen and (max-width : 760px){
        height: 200px;
        
        
    } 
    @media screen and (max-width: 460px){
        height: 100px;
        
    } 
    
    @media screen and (max-height: 460px){
        height: 400px;
      
    } 
`

export const CardH1 = styled.h1`
    font-size: 1.5rem;
    color: #FFF;
    margin-bottom: 60px;
    transform: translateZ(125px);
     
     @media screen and (max-width : 760px){
         display: none;
    } 
    
    
`

export const CardPara = styled.p`
    font-size: 0.8rem;
    color: black;
    
     @media screen and (max-height: 460px){
       font-size: 0.4rem;
    } 
    
`

export const CardButton = styled(Button)`
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
     transition : all 0.4s ease-in-out;
     color: ghostwhite;
     transform: translateZ(125px);
   
   
   @media screen and (max-width : 760px){
        font-size : 16px;
        padding : 2px 35px;
        margin-top: 40px;
    } 
    @media screen and (max-width: 460px){
        font-size : 13px;
        padding : 2px 35px;
        margin-top: 40px;
    } 

`
