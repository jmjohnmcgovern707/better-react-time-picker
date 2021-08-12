import React from 'react'
import {storiesOf} from '@storybook/react'

import {BetterReactTimePicker} from '../components/BetterReactTimePicker'


const stories = storiesOf('App Group', module)

const setTimeNow = (t) => {
    console.log("time="+t)
}

stories.add('BetterReactTimePicker', ()=>{
    
    return(<BetterReactTimePicker setTimeNow={setTimeNow} />)
    //return(<Requirements />)
})