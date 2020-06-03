import React from "react";
import logo from "./logo.svg";

export function HomePage() {
    return (
        <div className="container">
            <div className="col-lg-3 centered">
                <img className="App-logo" src={logo} alt="ReactJS"/>
            </div>
            <div className="col-lg-9 jumbotron">
                <h1>SurveyJS + ReactJS quickstart</h1>
                <p>
                    We have been developing and supporting our library for several years. We helped hundreds of companies across many industries. We carefully reviewed every survey and form from our customerscustomers to add the necessary functionality that covers all the popular scenarios.
                    We are confident, that you can build almost everything, that popular cloud services offer, using SurveyJS library. You can extend our SurveyJS Library and change its behavior.
                </p>
            </div>
        </div>
    );
  }
  