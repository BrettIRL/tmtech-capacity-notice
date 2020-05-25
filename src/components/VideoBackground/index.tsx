import React from 'react';
import './VideoBackground.scss';

interface VideoBackgroundProps {
  autoPlay: boolean;
  children: React.ReactNode;
  loop: boolean;
  muted: boolean;
}

function VideoBackground({
  autoPlay,
  children,
  loop,
  muted,
}: VideoBackgroundProps) {
  return (
    <section className="video-section">
      <video className="video" autoPlay={autoPlay} loop={loop} muted={muted}>
        <source src="videos/bg.mp4" type="video/mp4" />
        <img src="" alt="" />
      </video>
      <div className="content">{children}</div>
    </section>
  );
}

export default VideoBackground;
