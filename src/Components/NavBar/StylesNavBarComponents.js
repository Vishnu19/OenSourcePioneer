import styled from 'styled-components';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

export const StyledListItemText = styled(ListItemText)`
   background-size: 100%;
    background: linear-gradient(45deg, #00d2ff,#3a7bd5) repeat;
    background-size: 90%;
    
    -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     font-size : 18px;
     
     &:hover{
      font-weight: bolder; 
      text-shadow : 0 0 7px #00d2ff, 0 0 7px #3a7bd5 ;
`

export const CustomListItem = styled(ListItem)`
   &:hover{
    transition : all 0.4s ease-in-out;
    background: #232526;
    box-shadow : 0 0 7px #00d2ff, 0 0 7px #3a7bd5 ;
    font-weight: bolder; 
`