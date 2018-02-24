import React from 'react'
import ReactDOM from 'react-dom';
import App from './app';
import {AppContainer} from 'react-hot-loader'; // used for hot reloading during development
import {Provider} from 'react-redux';
import configureStore from './reducers/configureStore';

export const store = configureStore(); // export incase there are any other parts of the appliication that might need it
console.log(store.getState())
let render = Component => {
    console.log("re-rendering")
    ReactDOM.render(
        <Provider store={store} r>
            <AppContainer>
                <section className='section'>
                    <div className="container">
                        <Component wat={"oogedy boogedy!!!"}/>
                    </div>
                </section>
            </AppContainer>
        </Provider>,

    document.getElementById("app-root")
)
    ;
}


render(App);

if (module.hot) {
    module.hot.accept('./app', () => {
        render(App)
    });
}