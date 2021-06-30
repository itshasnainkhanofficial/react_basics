import React, { Component } from 'react'
import ClickCounter2 from './ClickCounter2'
import DbClickCounter3 from './DbClickCounter3'

export default class ParentWithHOC1 extends Component {
    render() {
        return (
            <div>
                {/* <ClickCounter2/>
                <DbClickCounter3/> */}


             {/* Passing props from parent to child */}

                <ClickCounter2 compname="clickcomp"/>
                <DbClickCounter3 compname="dbclickcomp"/>



            </div>
        )
    }
}
