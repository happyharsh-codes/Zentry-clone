import { useState, useRef , useEffect, act} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import '../general.css'
import '../styles/dashboard.css'

function Dashboard() {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [zabbra, setZabbra] = useState(false);
    
    const mainVideoRef = useRef(null);
    const miniVideoRef = useRef(null);

    const [active, setActive] = useState(mainVideoRef);

    const getUpcomingVideoSource = (index) => `videos/hero-${(index%4)+1}.mp4`
    const timeline = gsap.timeline();

    useEffect(() => {
        if (!hasClicked) return
        console.log(currentIndex);
        active.current.src = getUpcomingVideoSource(currentIndex);
        setActive(active == miniVideoRef ? mainVideoRef : miniVideoRef);
    }, [currentIndex])
    
    const handleVideoLoaded = (e) => {
        if (!hasClicked) return
        const timeline = gsap.timeline()
        timeline.to(e.target, {
            width: 0,
            height: 0,
            zIndex: -1,
        }).fromTo(e.target, {
            width: 0,
            height: 0,
            borderRadius: "15px",
            zIndex: 4
            },{
            height: "5rem",
            width: "5rem",
            border: "1px solid black",
            ease: "power2.inOut",
            duration: 1,
            onComplete: () => {
                const nowActive = (e.target == mainVideoRef.current) ? miniVideoRef.current : mainVideoRef.current
                gsap.set(nowActive, {zIndex: 1});
                setHasClicked(false);
                setZabbra(true);
                }
        });
        if (zabbra) return;
    }
    const handleVideoClick = (e) => {
        if (hasClicked) return;
        setHasClicked(true); 
        const timeline = gsap.timeline({
            onComplete: () => {
                setCurrentIndex( (prev) => (prev+1)%4);
            }
        })
        timeline.fromTo(e.target, {
            animation: "none",
            width: "5rem",
            height: "5rem",
            border: "none",
            borderRadius: 0,
            zIndex: 2,
        },{
            width: "100%",
            height: "100%",
            duration: 1,
            ease: "power1.inOut"
        })
    }

    return (
        <div className="dashboard">
            <div className="videoplayer floatbox">
                <video
                ref = {mainVideoRef}
                src= "videos/hero-1.mp4"
                autoPlay
                loop
                muted
                id = "mainVideoPlayer"
                className='floating'
                onClick= {active == miniVideoRef ? handleVideoClick : undefined}
                onLoadedData={handleVideoLoaded}
                ></video>
                <video
                ref= {miniVideoRef}
                src= "videos/hero-2.mp4"
                id= 'miniVideoPlayer'
                className= 'floating'
                autoPlay
                loop
                muted
                onClick= {active == mainVideoRef ? handleVideoClick : undefined}
                onLoadedData={handleVideoLoaded}
                ></video>
                <div className="contents transparent font-zentry floatbox">
                    <div className="top-left content-top-left">
                        <div><h1>REDEFI<b>N</b>E</h1></div>
                        <p className='font-robert-regular'>Enter the Human-Agentic OS <br/>The substrate where life, data and AI<br/>form a perpetual engine, compounding intelligence,<br/> capability, and value.</p>
                    </div>
                    <div className="bottom-right content-bottom-right">
                        <h1>Re<b>a</b>lity</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
