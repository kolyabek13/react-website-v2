import React from 'react'
import {InfoSection , Pricing} from '../../'
import { homeObjThree,homeObjFour } from './Data'

function Services() {
    return (
        <div>
            <InfoSection  {...homeObjThree}/>
            <Pricing />
            <InfoSection  {...homeObjFour}/>
        </div>
    )
}

export default Services
