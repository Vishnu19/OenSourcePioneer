import styled from 'styled-components';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

export const StyledListItemText = styled(ListItemText)`
   background-size: 100%;
    background: linear-gradient(45deg, #C6FFDD, #FBD786,#f7797d) repeat;
    color: #FBD786;
    -webkit-background-clip: text;   
     transition : all 0.4s ease-in-out;
     font-size : 18px;
     
`

export const CustomListItem = styled(ListItem)`
   &:hover{
    transition : all 0.4s ease-in-out;
    background: #e6dada;
    box-shadow : 0 0 7px #00d2ff, 0 0 7px #3a7bd5 ;
    font-weight: bolder; 
`