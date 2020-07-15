import * as React from "react";
import Navigation from "./Navigation";

const navLinks: Array<string> = ["news", "past", "comments", "ask", "show", "jobs", "submit"];
export const navLinksFooter: Array<string> = ["Guideline", "FAQ", "Support", "API", "Security", "List", "Bookmarklet", "Legal", "Apply to YC", "connect"];
const NavigationCosmos = () => {
    return (
        <div style={{ margin: '20px' }}>
            <Navigation navText={navLinks} />
            <Navigation navText={navLinksFooter} textStyle="subtitle" />
        </div>
        )
}
export default NavigationCosmos;