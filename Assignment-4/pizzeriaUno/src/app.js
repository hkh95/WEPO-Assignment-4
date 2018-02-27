import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Components/Container/Container';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/style';


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavigationBar/>
                <Container>
                    <Switch>
                        <Route exact path="/login" render={() => {
                            return <Redirect to="/" />;
                        }} />
                    </Switch>
                </Container>
            </div>
        );
    };
}


ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
