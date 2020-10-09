import React from 'react'
import {InfoSection , Pricing} from '../../'
import { homeObjTwo,homeObjThree,homeObjFour } from './Data'

function Products() {
    return (
        <div>
            <InfoSection  {...homeObjTwo}/>
            <InfoSection  {...homeObjThree}/>
            <Pricing />
            <InfoSection  {...homeObjFour}/>
        </div>
    )
}

export default Products
