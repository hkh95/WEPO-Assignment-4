import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Components/Container/Container';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <div>
                    <h2> HELLO </h2>
                </div>
            </Container>
        );
    };
}


ReactDOM.render(<App />, document.getElementById('app'));
