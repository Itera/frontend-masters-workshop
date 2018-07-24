import React from 'react';
import { connect } from 'react-redux';
import AppComponent from '../components/App';
import {changeSelection} from '../actions';

const mapStateToProps = state => {
    return {
        selected: state.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (event) => dispatch(changeSelection(event))
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                eyes: [],
                mouths: [],
                noses: []
            }
        };
    }

    componentDidMount() {
        fetch('http://api.myjson.com/bins/9jbc6')
            .then(response => response.json())
            .then(json => this.setState({
                options: {
                    eyes: json.face.eyes,
                    mouths: json.face.mouth,
                    noses: json.face.nose
                }
            }))
            .catch(error => console.error(error));
    }

    render() {
        return <AppComponent {...this.props} {...this.state} />;
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);