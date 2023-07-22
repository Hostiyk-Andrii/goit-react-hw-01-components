import styled from 'styled-components';


export const Item = styled.li`
list-style:none;
text-align:center;
align-items: center;
display:flex;
margin-bottom:20px;`



export const Avatar = styled.img`
border:1px solid black;
border-radius:20%;
padding:10px;`

export const Name = styled.p`
margin:5px;
margin-left:30px;`

export const List = styled.ul`
display:block;`

export const Status = styled.span`
  background-color: red;
  border: 2px solid;
  text-align: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;


