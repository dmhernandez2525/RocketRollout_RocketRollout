import React from "react"

import {AccordionSingle} from "@comfort-order/dry"
 
import "./ComponentSpecific.scss"


const ComponentSpecific = ({change, name}) => {

    const children = (
                <div>
            {change}
        </div>
    )

    return (
        <AccordionSingle text={name}  children={children}/>

    )
}

export default ComponentSpecific;