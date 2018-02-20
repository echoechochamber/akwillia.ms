import React from 'react';
import {connect} from 'react-redux';
import './app.scss';
import {tryMe} from "./reducers/test";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='hero is-dark'>
                <div className="hero-body">
                    <div className="container">
                        <h1 className='title is-centered has-text-primary'>Test Text</h1>
                        <h2 className='subtitle'>(just too see if requests from the api work)</h2>
                        <a className='button is-primary' onClick={()=>{this.props.try()}}>Click me to test</a>
                        <br/>
                        <p>{this.props.wat}</p>
                        <p>{this.props.test}</p>
                    </div>
                </div>
            </section>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        test: state.testReducer.data
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        try: ()=>{dispatch(tryMe())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);