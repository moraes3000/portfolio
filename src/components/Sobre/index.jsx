import React from 'react';
import Foto from '../../assets/img/fotoPerfil.png'
import { Container, Box, BoxImg, BoxConteudo } from './styles';
import Separador from '../Separador'
function Sobre() {
    return (
        <Container id='sobre'>
            <h1>Sobre</h1>
            <Separador />
            <Box>
                <BoxImg>
                    <img src={Foto} alt='Foto perfil' />
                </BoxImg>
                <BoxConteudo>
                    <h2>Bruno Moraes</h2>
                    <Separador />
                    <p>Sou o Bruno, recém formado em Analise de desenvolvimento de sistemas pela Universidade Estacio.</p>
                    <p>Apaixonado pro tecnologia frontend, atualmente estudando ReactJS e NextJS</p>
                    <p>Trabalho atualmente em uma empresa de intranet na area de suporte, mas faço algumas alterações no frontend e no backend utilizando o framework Django</p>
                </BoxConteudo>
            </Box>
        </Container>

    )
}

export default Sobre;