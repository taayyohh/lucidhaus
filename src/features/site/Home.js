import React                 from 'react'
import {contentWrapperStyle} from '../../shared/Layout/styles'
import Div                   from '../../shared/Basic/Div'

const Home = () => {
    return (
        <Div theme={contentWrapperStyle}>
            {/*<MotionDiv*/}
            {/*    initial={{ transform: 'rotate(0)', height: 50, width: 50, borderRadius: 0}}*/}
            {/*    theme={{margin: '0 auto', background: '#afe'}}*/}
            {/*    animate={{*/}
            {/*        scale: [1, 2, 2, 1, 1],*/}
            {/*        rotate: [0, 360, 0],*/}
            {/*        borderRadius: ["50%", "20%", "50%"],*/}
            {/*        backgroundColor: ["#1da", "#1fa", "#e3a"]*/}
            {/*    }}*/}
            {/*    transition={{*/}
            {/*        duration: 2,*/}
            {/*        ease: "easeInOut",*/}
            {/*       // times: [0, 0.2, 0.5, 0.8, 1],*/}
            {/*        loop: Infinity,*/}
            {/*        repeatDelay: 1*/}
            {/*    }}*/}
            {/*/>*/}
        </Div>
    )
}

export default Home