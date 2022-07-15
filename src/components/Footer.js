import React from "react"
import Twitter from "../images/Twitter_white.png"
import Facebook from "../images/Facebook_white.png"
import Github from "../images/Github_white.png"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/burnrnoinfinity">
                <img
                    className="footer--img"
                    src={Twitter}
                    alt="Icon of the twitter logo."
                    width="30px"
                />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100004193567764">
                <img
                    className="footer--img"
                    src={Facebook}
                    alt="Icon of the facebook logo."
                    width="30px"
                />
            </a>
            <a href="https://github.com/EddieDevv">
                <img
                    className="footer--img"
                    src={Github}
                    alt="Icon of the github logo."
                    width="30px"
                />
            </a>
        </div>
    )
}