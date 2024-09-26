import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

export function LinkButton({name, path, icon}) {
    return (
        <Link to={path} className="link-button">
            <span>{name}</span>
        </Link>
    )
}