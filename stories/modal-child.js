import React, { Component } from 'react'

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: `Hello there pardner, ${props.name}`
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
            this.setState({ message: `Hello there pardner, ${nextProps.name}`})
        }
    }

    render() {
        return (
            <div>
                {this.state.message}
            </div>
        )
    }
}

export default Child