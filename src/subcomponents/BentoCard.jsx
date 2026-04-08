import "../styles/bentocard.css"

function BentoCard({ title, para, src, className} ) {
    return (
        <div className={`bentocard floatbox ${className}`}>
            <video 
            src= {src}
            muted
            loop
            autoPlay
            />
            <div className="content floating top-left">
                <h1 className="font-zentry">{title}</h1>
                <p className="font-robert-regular">{para}</p>
            </div>
        </div>
    )
}

export default BentoCard