import styled from 'styled-components';

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
        height: 900px;
        
    } 
    @media screen and (max-width: 460px){
        height: 700px;
        
    } 
    
    @media screen and (max-height: 460px){
        height: 400px;
        
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
    
     @media screen and (max-width: 460px){
        grid-template-columns: 1fr ;
        padding: 0 20px;
    } 
`

export  const  CardSection = styled.div`
    background: aquamarine;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    border-radius: 10px;
    max-height: 450px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in;
    
    &:hover{
      transform: rotate(5deg);
      transition: all 0.4s ease-in-out;
      cursor: pointer;
    }
    
`

export const CardImage = styled.div`
    height: 160px;
    width: 160px;
    margin-bottom: 30px;
`

export const CardH1 = styled.h1`
    font-size: 2rem;
    color: black;
    margin-bottom: 60px;
    
     @media screen and (max-width: 460px){
       font-size: 1.5rem;
    } 
    
`

export const CardPara = styled.p`
    font-size: 0.8rem;
    color: black;
    
     @media screen and (max-height: 460px){
       font-size: 0.4rem;
    } 
    
`
