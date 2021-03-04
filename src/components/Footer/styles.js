import styled from 'styled-components';

export const Container = styled.div`

background: ${props => props.theme.colors.secundary};
color: ${props => props.theme.colors.text};

padding: 0 30px;
max-width:960px;
margin: 20px auto;
padding-top:20px;



p{
  display:flex;
  flex-direction:row;
  justify-content:center;
  margin-bottom:20px;
  a{
    color: ${props => props.theme.colors.text};;
  }
}
`;


export const ListSocial = styled.ul`

  display:flex;
  flex-direction:row;
  justify-content:center;

li{
  list-style:none;
  a{
    color: ${props => props.theme.colors.text};;
  }

}
svg{
  font-size:32px;
}
`;  
