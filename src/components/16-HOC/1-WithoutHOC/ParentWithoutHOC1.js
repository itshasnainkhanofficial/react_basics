import React, { Component } from 'react'
import ClickCounter2 from './ClickCounter2'
import DbClickCounter3 from './DbClickCounter3'


export default class ParentWithoutHOC extends Component {
    render() {
        return (
            <div>
                <ClickCounter2/>
                <DbClickCounter3/>
            </div>
        )
    }
}
