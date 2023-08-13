"use client"
import {useMotionValue,useInView,useSpring} from 'framer-motion'
import { useEffect, useRef } from "react";

export default  ({value}:any)=>{
const ref:any = useRef(null)
const motionValue = useMotionValue(0)
const springValue = useSpring(motionValue,{duration:3000})
const inView = useInView(ref)
useEffect(()=>{
    if(inView){
        motionValue.set(value)
    }
},[inView,value,motionValue])


useEffect(()=>{
    springValue.on('change',(latest)=>{
        if(ref.current && latest.toFixed(0) <=value){
            ref.current.textContent = latest.toFixed(0)
        }
    })
},[springValue,value])

return (<span ref={ref}></span>)

}
