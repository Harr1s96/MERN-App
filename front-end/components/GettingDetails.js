import React from "react";

export default function GettingDetails(props) {
    return (
        <div className="card">
            <p key={props.Details}>
                {props.Username}
            </p>
            <br />
            <p>{props.Email}</p>
            <br />
        </div>
    );
}