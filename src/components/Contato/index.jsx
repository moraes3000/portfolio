import React from 'react';

import { Container, Formulario } from './styles';
import Separador from '../Separador'
function Sobre() {
    return (
        <Container id='contato'>
            <h1>Contato</h1>
            <Separador />
            <Formulario method="post" action="mailto:bruno_bmoraes@hotmail.com">

                <div>
                    <label for="formNome">Nome</label>
                    <input type='text' id='formNome' name="formNome" />
                </div>
                <div>
                    <label for="formEmail">Email</label>
                    <input type='email' id='formEmail' name="formEmail" />
                </div>
                <div>
                    <label for="formConteudo">Conteúdo</label>
                    <textarea id='formConteudo' name="formConteudo" />
                </div>
                <button type='submit'>Enviar</button>
            </Formulario>
        </Container>

    )
}

export default Sobre;