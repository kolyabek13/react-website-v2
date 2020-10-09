import React from 'react'
import {InfoSection , Pricing} from '../../'
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from './Data'

function Home() {
    return (
        <div>
            <InfoSection  {...homeObjOne}/>
            <InfoSection  {...homeObjTwo}/>
            <InfoSection  {...homeObjThree}/>
            <Pricing />
            <InfoSection  {...homeObjFour}/>
        </div>
    )
}

export default Home
