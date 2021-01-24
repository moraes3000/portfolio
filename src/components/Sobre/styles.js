import styled from 'styled-components';

export const Container = styled.div`

background: ${props => props.theme.colors.secundary};
color: ${props => props.theme.colors.text};

padding: 0 30px;
max-width:1200px;
margin: 20px auto;
padding-top:20px;

`;


export const Box = styled.div`
display:flex;
justify-items:center;
align-items:center;
flex-wrap: wrap;

@media(max-width:700px){

}
`;



export const BoxImg = styled.div`
  padding: 10px;
  flex: 50%;
  display: flex;
    align-items: center;
    justify-content: center;
  img{
    width:300px;
    }
    @media (max-width: 800px) {
    flex: 100%;
    img{
      width:150px;
    }
  }
`;



export const BoxConteudo = styled.div`
  padding: 10px;
  flex: 50%;
  @media (max-width: 800px) {
    flex: 100%;
  }
`;  
