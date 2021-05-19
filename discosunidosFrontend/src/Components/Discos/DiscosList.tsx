import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Disco } from './Disco';
import *as discoService from '../Discos/DiscoService'
import DiscoItem from './DiscoItem'


import './DiscoItem.css'
function DiscosList() {

  const [discos,setDiscos]=useState<Disco[]>([])
  const loadDiscos=async()=>{
    const res=await discoService.getDiscos();
    setDiscos(res.data);
  }
  useEffect(() => {
  loadDiscos()
  }, [])
  return (
        <div className="divcards">
            {discos.map((disco)=>{
              return <DiscoItem disco={disco}/>
            })}
        </div>
  );
}

export default DiscosList;