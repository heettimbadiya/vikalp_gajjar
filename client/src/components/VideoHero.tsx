import React, { useRef, useEffect } from 'react';

const VideoHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays properly on all devices
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay prevented:', err);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      {/* Hero Background Video */}
      <video
        ref={videoRef}
        src="/media/optimized/Intro.mp4"
        poster="/media/home/intro-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        aria-label="Intro to VTech Makkers"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          objectFit: 'cover',
          objectPosition: 'center center',
          transform: 'translateZ(0)',
          willChange: 'auto'
        }}
        onLoadStart={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        }}
        onCanPlayThrough={() => {
          if (videoRef.current) {
            videoRef.current.play().catch(err => {
              console.log('Video autoplay prevented:', err);
            });
          }
        }}
        onEnded={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(err => {
              console.log('Video loop restart prevented:', err);
            });
          }
        }}
        onError={(e) => {
          console.error('Video failed to load:', e);
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl hero-text">
          <h1 className="font-bold text-white mb-4">
            Solutions Built for Maximum Uptime & Quality
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            30+ years of expertise in crushing, screening, and material handling equipment
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;