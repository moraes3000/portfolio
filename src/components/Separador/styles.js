import styled from 'styled-components';

export const Container = styled.div`
    width:70px;
    height:2px;
    background-color:red;
    color: ${props => props.theme.colors.text};

    margin: 5px 0 15px 0

`;