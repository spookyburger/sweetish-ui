import React, { Component } from 'react'

import ModalChild from './modal-child'

class ModalEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Bryce'
        }
    }

    changeName = () => {
        this.setState({ name: 'Tonnoy' })
    }

    render() {
        return (
            <div>
                <div onClick={this.changeName}>Change me</div>
                <div>OwO! Hello there from my modal</div>
                <ModalChild name={this.state.name} ></ModalChild>
            </div>
        )
    }
}

export default ModalEntry