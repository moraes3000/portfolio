import React from 'react'
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'
import DescricaoProjeto from './components/DescricaoProjeto'


const Routes = () => {
    return (
        <BrowserRouter>

            <Switch>
                <Route exact path='/projeto/:id' component={DescricaoProjeto} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;