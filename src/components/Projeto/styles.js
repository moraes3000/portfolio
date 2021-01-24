import styled from "styled-components";

export const Container = styled.div`

background: ${props => props.theme.colors.secundary};
color: ${props => props.theme.colors.text};

padding: 0 30px;
max-width:1200px;
margin: 20px auto;
padding-top:20px;

`;


export const List = styled.ul`
grid-template-columns: repeat(3, 1fr);
display: grid;
column-gap: 2rem;
padding-left:0;
margin-left:10px;
margin-right:10px;

@media(max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
}

@media(max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
}

`;
export const Projeto = styled.li`
list-style:none;
/* background:#ccc; */
margin-bottom:15px;

img{
  max-width:100%;
}
`;

export const Card = styled.div`
padding:15px;
`;
