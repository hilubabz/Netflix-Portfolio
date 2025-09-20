import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function PopUpAnimate({children}){
    const ref=useRef(null)
    const inView=useInView(ref)
    const popUpAnimate=useAnimation()

    useEffect(()=>{
        if(inView){
            popUpAnimate.start('final')
        }
    },[inView])
    return(
        <motion.div
            ref={ref}
            variants={{
                'start':{scale:0},
                'final':{scale:1, zIndex:20}
            }}
            initial='start'
            animate={popUpAnimate}
            transition={{type:'spring', stiffness:350, damping:7,delay:0.25}}
        >
            {children}
        </motion.div>
    )
}