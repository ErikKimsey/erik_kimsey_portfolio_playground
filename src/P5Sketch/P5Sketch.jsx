import React, { useEffect, useState } from "react";
import Sketch from "react-p5";


let x = 50;
let y = 50;

export default function P5Sketch({ props }) {

    const [dimen, setDimens] = useState();

    useEffect(() => {
        setDimens(props);
    }, [props]);

    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(p5.displayWidth, p5.displayHeight).parent(canvasParentRef);
    };

    const draw = (p5) => {
        p5.background(111);
        p5.ellipse(x, y, 70, 70);
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        x++;
    };

    return (
        <div>
            <Sketch setup={setup} draw={draw} style={{ position: "fixed", zIndex: 0 }} />
        </div>)
}