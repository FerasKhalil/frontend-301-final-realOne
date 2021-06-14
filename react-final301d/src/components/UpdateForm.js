import React, { Component } from 'react'

class UpdateForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formShow: false,
            nameText: '',
            imgText: '',
            levelText: ''
        }
    }



    nameChange = (event) => {
        this.setState({
            nameText: event.target.value
        })
        console.log(this.state.nameText);
    }
    imgChange = (event) => {
        this.setState({
            imgText: event.target.value
        })
        console.log(this.state.imgText);
    }
    levelChange = (event) => {
        this.setState({
            levelText: event.target.value
        })
        console.log(this.state.levelText);
    }
    render() {
        return (
            <div>
                <form show={this.props.formShow} >
                    <input type="text" placeholder="name" onChange={this.nameChange} />
                    <input type="text" placeholder="img" onChange={this.imgChange} />
                    <input type="text" placeholder="level" onChange={this.levelChange} />
                </form>
            </div>
        )
    }
}

export default UpdateForm;
