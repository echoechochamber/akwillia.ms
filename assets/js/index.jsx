import React from 'react'
import ReactDOM from 'react-dom';
import App from './app';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <section className='section'>
            <Component/>
            </section>
        </AppContainer>,
        document.getElementById("app-root"));
}


render(App);

if(module.hot){
    module.hot.accept('./app', ()=>{render(App)});
}