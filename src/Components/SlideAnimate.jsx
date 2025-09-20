import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";


export default function SlideAnimate({children,content}){
    const ref=useRef(null)
    const val=content?40:-40
    const inView=useInView(ref, {once:true})
    const slideAnimate=useAnimation()

    useEffect(()=>{
        if(inView){
            slideAnimate.start('visible')
        }
    },[inView])

    return(
        <motion.div
            ref={ref}
            variants={{
                start:{opacity:0, x:val},
                visible:{opacity:1, x:0}
            }}
            initial='start'
            animate={slideAnimate}
            transition={{opacity:{duration:0.5}, x:{type:'spring',stiffness:300, delay:0.25}}}
        >
            {children}
        </motion.div>
    )
}