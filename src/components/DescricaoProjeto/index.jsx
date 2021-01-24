import React, { Component } from 'react'
import './styles.js'
import projetos from '../../data/projetos'
function DescricaoProjeto() {
    console.log(projetos)
    const { id } = this.props.params
    console.log('id' + id)
    return (
        <div className='filme-info'>


        </div>
    )
}



export default DescricaoProjeto;
