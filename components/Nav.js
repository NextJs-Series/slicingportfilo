import classnames from "classnames";
import NavItem from "./NavItem";
import { SiKaios, SiJabber, SiOdnoklassniki, SiOpsgenie } from "react-icons/si";
export default function Nav({ scheme, dir }) {
    const dirs = {
        horizontal: "justify-center space-x-10",
        vertical: "flex-col space-y-6"
    }

    const pickedDir = dirs[dir];

    return (
        <ul className={classnames("flex", pickedDir)}>
            <NavItem scheme={scheme} href="#profile">  <span>  Profile</span></NavItem>
            <NavItem scheme={scheme} href="#skills"> <span>  Skills</span></NavItem>
            <NavItem scheme={scheme} href="#projects"><span>  Projects</span></NavItem>
            <NavItem scheme={scheme} href="#contact"><span>Contact</span></NavItem>
        </ul>
    );
}
