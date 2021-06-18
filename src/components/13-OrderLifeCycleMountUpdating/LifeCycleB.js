import React, { Component } from 'react'

class LifeCycleB extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Kashan'
    }
    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(props, state) { // when compoent depeneds on props, rarly used method
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleB componentDidUpdate')
	}

  render() {
    console.log('LifecycleB render')
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifeCycleB