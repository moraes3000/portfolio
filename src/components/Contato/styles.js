import styled from "styled-components";

export const Container = styled.div`

background: ${props => props.theme.colors.secundary};
color: ${props => props.theme.colors.text};

padding: 0 30px;
max-width:1200px;
margin: 20px auto;
padding: 20px;

`;

export const Formulario = styled.form`
label {
    display: inline-block;
    margin-bottom: .5rem;
}
input{
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
textarea{
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
div{
    margin-bottom:15px;
}
}

`;