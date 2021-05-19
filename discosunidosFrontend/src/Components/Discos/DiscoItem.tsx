import { disconnect } from 'process'
import React, { Fragment } from 'react'
import { Disco } from './Disco'


interface Props{
    disco:Disco
}

function DiscoItem({disco}:Props) {
    return (
        <Fragment>

<div className="divcard">
 <img src="" width="100px"></img><p>disco</p>
 <h2 id="hs">{disco.title}</h2>
 <p id="ps">{disco.description}</p>
</div>
        
</Fragment>
    )
}

export default DiscoItem
