import React from 'react';

interface TextureOverlayProps {
    className?: string;
}

export default function TextureOverlay({ className = "opacity-20" }: TextureOverlayProps) {
    return (
        <div
            className={`absolute inset-0 pointer-events-none z-0 ${className}`}
            style={{
                backgroundImage: "url('/assets/textures/white-texture.png')",
                backgroundRepeat: "repeat"
            }}
        ></div>
    );
}
