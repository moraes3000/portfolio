import React from 'react';

import { Container, List, Projeto, Card } from './styles';
import projetos from '../../data/projetos'
import Separador from '../Separador'

function Projetoss() {

    // console.log(projetos)

    return (

        <Container id='projeto'>

            <h2>Projetos</h2>
            <Separador />
            <List>


                {projetos.map(projeto => {
                    return (
                        <Projeto key={projeto.id}>
                            <div>
                                <img src={projeto.img} alt={projeto.nome} />
                            </div>
                            <Card>
                                <h2>{projeto.nome}</h2>
                                <Separador />
                                <p>{projeto.descricao}</p>
                                {/* <a href={`/projeto/${projeto.id}`}>{projeto.id}</a> */}

                            </Card>
                        </Projeto>
                    )
                })}
            </List>
        </Container>
    )
}


export default Projetoss;