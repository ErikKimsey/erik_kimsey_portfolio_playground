import React, { useRef, useState, useEffect } from 'react';
import "./playground.scss";

export default function Playground() {

    const containerRef = useRef();

    return (
        <div className="playground-container" ref={containerRef}>
            PLAYGROUND
        </div>
    );
}
