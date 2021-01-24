import React from 'react';
import Foto from '../../assets/img/foto.jpg'
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
                </BoxConteudo>
            </Box>
        </Container>

    )
}

export default Sobre;