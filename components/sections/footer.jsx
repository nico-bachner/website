import ExtLink from '../ext-link'
import { GitHub, NextJS, Tailwind, Vercel, Lift } from '../icons'
import * as Elevator from "elevator.js";

export default function Footer() {
    function lift() {
        var elevator = new Elevator({
            element: document.querySelector('.elevator-button'),
            mainAudio: 'music/elevator-music.mp3',
            endAudio: 'music/elevator-ding.mp3'
        });
        elevator.elevate();
    }
    return (
        <footer className="pt-36 text-center">
            <button onClick={lift}>
                <Lift/>
                Back to the top
            </button>
            <div className="mt-12 font-mono">
                <p>Built from scratch by Nico Bachner</p>
                <p>Design by Brittany Chiang</p>
                <p>
                    <ExtLink href="https://github.com/nico-bachner/website" className="text-blue-500">
                        View Source Code
                    </ExtLink>
                </p>
            </div>
        </footer>
    )
}