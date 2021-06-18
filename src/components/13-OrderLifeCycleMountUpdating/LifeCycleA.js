import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Hamza'
		}
		console.log('LifecycleA constructor')
	}

	static getDerivedStateFromProps(props, state) { // when compoent depeneds on props, rarly used method
		console.log('LifecycleA getDerivedStateFromProps')
		return null
	}

	componentDidMount() {
		console.log('LifecycleA componentDidMount')
	}

	shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleA componentDidUpdate')
	}

	changeState = () => {
		this.setState({
			name: 'Kashif'
		})
	}

	render() {
		console.log('LifecycleA render')
		return (
			<div>
				<button onClick={this.changeState} className="bg-red-300 p-5">Change state</button>
				LifecycleA<LifeCycleB />
			</div>
		)
	}
}

export default LifeCycleA