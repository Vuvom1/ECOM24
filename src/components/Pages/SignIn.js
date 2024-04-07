import React from "react";
import "./SignIn.css";

export default function SignIn() {
    return (
        <div className="sign-in">
            {/* <video src="/videos/video-3.mp4" autoPlay loop muted /> */}
            <div className="sign-in_container col-4">
                <div className="title">Sign in to TRVL</div>
                <div className="text">Username or Email</div>
                <input type="text"></input>
                <div className="text">Password</div>
                <input type="password"></input>
                <button
                    className="btn-login"
                >Sign in</button>
                <div className="back" >Go back</div>
            </div>
        </div>
    )
}