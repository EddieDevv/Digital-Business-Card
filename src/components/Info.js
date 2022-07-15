import React from "react"
import Portrait from "../images/Portrait.jpg"
import Gmail from "../images/Gmail_white.png"
import LinkedIN from "../images/LinkedIN_white.png"

export default function Info() {
    return (
        <div className="info">
            <img
                className="portrait"
                src={Portrait}
                alt="Head shot of Eddie Agic"
                width="350px"
            />
            <h1>Eddie Agic</h1>
            <h2>Frontend Developer</h2>
            <h3>eddieagic.website</h3>
            <div className="buttons">
                <a href="mailto: eddieagic2001@gmail.com">
                    <div className="buttons--gmail">
                        <img
                            src={Gmail}
                            alt="Icon of the Gmail logo"
                            width="20px"
                        />
                        <h4>E-mail</h4>
                    </div>
                </a>
                {/* Need to make a linkedin to link here */}
                <a href="https://www.linkedin.com/in/eddie-agic-679021240/">
                    <div className="buttons--linkedin"> 
                        <img
                            src={LinkedIN}
                            alt="Icon of the LinkedIN logo"
                            width="20px"
                        />
                        <h4>LinkedIN</h4>
                    </div>
                </a>
            </div>
        </div>
    )
}