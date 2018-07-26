import React, { Component } from 'react'
import { render }  from 'react-dom'

class Application extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <h1>Hello World</h1>
        )
    }
}

window.React = React

render(<Application />, document.getElementById('react-root'))