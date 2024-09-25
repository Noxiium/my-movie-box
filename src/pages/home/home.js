import React, { useState } from "react";
import {LinkButton} from "../../components/buttons/linkButton";
import "./home.css";
import "../../components/buttons/button.css";

/**
 * Renders the home page.
 * @returns {JSX.Element} the home component.
 */
export function Home() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    async function handleAuth () {
        if (isLoggedIn) {
            try{
                await logoutUser();
                setIsLoggedIn(false)
            } catch (error) {
                console.log("Logout failed:", error)
            }
        }
        else {
            try{
                await loginUser();
                setIsLoggedIn(true)
            } catch (error) {
                console.log("Login failed:", error)
            }
        }
    }

    async function loginUser() {
        // handle login
    }
    async function logoutUser() {
        // handle logout
    }

    return (
        <div className="home-page">
            <h1>Home Page of My Movie Box</h1>
            <div className="button-container">
            <LinkButton name="About" path="/About"/>
            <LinkButton name="Box" path="/Box"/>
            <button className ="nav-button" onClick={handleAuth}>
                {isLoggedIn ? "Log Out" : "Log In"}
            </button>

            
            </div>
        </div>
    );
}
