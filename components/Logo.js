import { SiNeovim } from "react-icons/si";
import Link from 'next/link';
export default function Logo() {
    return (
        <div className="uppercase text-2xl font-semibold tracking-widest text-white">
            <Link href="/" passHref>
                <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                    <SiNeovim size="3rem" /> <span> auman Portfolio</span>
                </a>
            </Link>
        </div>
    );
}
