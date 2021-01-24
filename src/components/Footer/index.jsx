import React from 'react';
import Foto from '../../assets/img/foto.jpg'
import { Container, ListSocial } from './styles';
import Separador from '../Separador'

import { FaGitSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <Container id='sobre'>
            <p>Email: <a href="bruno_bmoraes@hotmail.com">bruno_bmoraes@hotmail.com</a></p>
            <ListSocial>
                <li><a href='https://github.com/moraes3000' target='_blanck' ><FaGitSquare /></a></li>
                <li><a href='https://www.linkedin.com/in/bruno-barbeiro-moraes-bbb043123/' target='_blanck' ><FaLinkedin /></a></li>
                <li><a href='tel:5511941606170' target='_blanck' ><FaWhatsapp /></a></li>
            </ListSocial>
        </Container>

    )
}

export default Footer;