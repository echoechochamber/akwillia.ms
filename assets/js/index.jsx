import React from 'react'
import ReactDOM from 'react-dom';

class Test extends React.Component{
    render(){
        return <h1>yo yo yo it's react here</h1>
    }
};



ReactDOM.render(<Test/>, document.getElementById("app-root"));