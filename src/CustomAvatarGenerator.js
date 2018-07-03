import React from 'react';

class AvatarImage extends React.Component {
    render() {
        const { eyes, nose, mouth, color } = this.props;
        return <img
            src={`http://api.adorable.io/avatars/face/${eyes}/${nose}/${mouth}/${color.substring(1, 7)}`}
            alt="Aaabaaadaaar!" />;
    }
}

const PartSelection = ({ name, value, items, onChange }) => (
    <select name={name} value={value} onChange={onChange}>
        {items.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
)

const AvatarConfiguration = ({ eyes, nose, mouth, color, options, onValueChange }) => (
    <div>
        <PartSelection name="eyes" value={eyes} onChange={onValueChange} items={options.eyes} />
        <PartSelection name="nose" value={nose} onChange={onValueChange} items={options.noses} />
        <PartSelection name="mouth" value={mouth} onChange={onValueChange} items={options.mouths} />
        <input type="color" value={color} name="color" onChange={onValueChange} />
    </div>
)

class CustomAvatarGenerator extends React.Component {

    constructor() {
        super();

        this.state = {
            eyes: 'eyes1',
            nose: 'nose2',
            mouth: 'mouth1',
            color: '#8e8895',
            options: {
                eyes: [],
                noses: [],
                mouths: []
            }
        }
    }

    componentDidMount() {
        fetch('http://api.myjson.com/bins/9jbc6')
            .then(data => data.json())
            .then(json => this.setState({
                options: {
                    eyes: json.face.eyes,
                    noses: json.face.nose,
                    mouths: json.face.mouth
                }
            }))
            .catch(error => console.error("Response error.", error));
    }

    valueChanged = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return <div>
            <h1>Totally custom!</h1>
            <AvatarConfiguration {...this.state} onValueChange={this.valueChanged} />
            <AvatarImage {...this.state} />
        </div>
    }
}

export default CustomAvatarGenerator;