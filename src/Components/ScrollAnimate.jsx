import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ScrollAnimate({ children }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const visibleAppear = useAnimation()

    const slideRef = useRef(null)
    const slideView = useInView(slideRef, { once: true })
    const slideAnimate = useAnimation()

    useEffect(() => {
        if (inView) {
            visibleAppear.start('visible')
        }
    }, [inView])

    useEffect(() => {
        if (slideView) {
            slideAnimate.start('slide')
        }
    }, [slideView])
    return (
        <div className="relative overflow-hidden">
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial='hidden'
                animate={visibleAppear}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div className="absolute left-0 right-0 bottom-0 top-0 bg-red-700 z-20"
                ref={slideRef}
                variants={{
                    appear: { left:0 },
                    slide: { left: '100%' }
                }}
                initial='appear'
                animate={slideAnimate}
                transition={{ duration: 0.5 }}
            >

            </motion.div>
        </div>
    )
}