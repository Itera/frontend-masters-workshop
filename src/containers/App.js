import React from 'react';
import AppComponent from '../components/App';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: {
                eyes: 'eyes1',
                nose: 'nose2',
                mouth: 'mouth1'
            },
            options: {
                eyes: [],
                mouths: [],
                noses: []
            }
        }
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

    onChange = (event) => {
        this.setState({
            selected: {
                ...this.state.selected,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return <AppComponent {...this.state} onChange={this.onChange} />;
    }

}

export default App;