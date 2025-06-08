import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-6 py-6">
          <div className="text-center">
            <span className="text-white text-lg font-light tracking-wider">time—line</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="text-white text-sm">Powered by</span>
              <div className="bg-black px-3 py-1 rounded-full flex items-center gap-2">
                {/* Inline SVG logo, matching the Framer SVG (replace with actual SVG as needed) */}
                <svg width="86" height="24" viewBox="0 0 86 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 24 }}>
                  {/* Example SVG path, replace with the real one as needed */}
                  <rect width="86" height="24" rx="12" fill="#fff" />
                  <text x="50%" y="55%" textAnchor="middle" fill="black" fontSize="11" fontWeight="bold" dy=".3em" fontFamily="sans-serif">Mitopure</text>
                </svg>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                Introducing NEW Mitopure® Gummies
              </h1>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex-shrink-0 mt-1 flex items-center justify-center">
                  {/* CheckCircle Icon (filled, dark) */}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="#272724" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#FCFCFA"/>
                    <path d="M7.1 11.2L4.8 8.9L6.2 7.5L7.1 8.4L11.2 4.3L12.6 5.7L7.1 11.2Z" fill="#272724"/>
                  </svg>
                </div>
                <span className="text-lg">500mg Mitopure for cellular function &amp; healthy aging*</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex-shrink-0 mt-1 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="#272724" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#FCFCFA"/>
                    <path d="M7.1 11.2L4.8 8.9L6.2 7.5L7.1 8.4L11.2 4.3L12.6 5.7L7.1 11.2Z" fill="#272724"/>
                  </svg>
                </div>
                <span className="text-lg">Sugar-free strawberry gummies free from artificial ingredients</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex-shrink-0 mt-1 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="#272724" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#FCFCFA"/>
                    <path d="M7.1 11.2L4.8 8.9L6.2 7.5L7.1 8.4L11.2 4.3L12.6 5.7L7.1 11.2Z" fill="#272724"/>
                  </svg>
                </div>
                <span className="text-lg">Proven benefits supported by 15+ years of research</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex-shrink-0 mt-1 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="#272724" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#FCFCFA"/>
                    <path d="M7.1 11.2L4.8 8.9L6.2 7.5L7.1 8.4L11.2 4.3L12.6 5.7L7.1 11.2Z" fill="#272724"/>
                  </svg>
                </div>
                <span className="text-lg">Formulated in Switzerland &amp; made in the U.S.A.</span>
              </div>
            </div>

            {/* Product Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6 max-w-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#C23F3F] font-bold text-lg">#1</span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-medium">Longevity Gummies</h3>
                  <p className="text-xs text-[#272724] font-medium">Doctor Recommended</p>
                  <p className="text-xs text-black opacity-60">Urolithin A Brand</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-gray-400 text-sm line-through">$125/mo</div>
                  <div className="text-white text-xl font-bold">$100/mo</div>
                </div>
              </div>
              <button className="w-full bg-white text-gray-800 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                BUY NOW
              </button>
            </div>
          </div>

          {/* Right Content - Video with Overlaid Card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden flex flex-col items-center" style={{ borderRadius: 12, opacity: 1 }}>
              {/* Video Container */}
              <div className="w-full h-[600px] flex items-center justify-center relative" style={{ opacity: 1 }}>
                {/* Overlaid Card */}
                <div className="absolute top-6 left-6 bg-[#FCFCFA] rounded-lg shadow-lg px-4 py-3 z-10" style={{
                  borderRadius: 6,
                  boxShadow: 'rgba(0,0,0,0.06) 0px 6px 24px 0px, rgba(0,0,0,0.06) 0px 1px 4px 0px, rgba(0,0,0,0.02) 0px 0px 0px 1px'
                }}>
                  <div className="flex flex-col items-center">
                    <h3 className="text-[28px] font-light text-[#C23F3F] leading-[1.2] mb-1">#1</h3>
                    <p className="text-[12px] font-medium text-[#272724] leading-[1.5] mb-0.5">Doctor Recommended</p>
                    <p className="text-[12px] text-black opacity-60 leading-[1.5]">Urolithin A Brand</p>
                  </div>
                </div>
                {/* Video */}
                <video
                  src="https://res.cloudinary.com/dcxo7cldm/video/upload/v1745402280/Header_Gummies_V4_no_sound_track_sjvyqw.mp4"
                  poster="https://framerusercontent.com/images/9H71gNu2vwxCCu0axWX1p2xHSZ0.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                  style={{
                    borderRadius: 12,
                    backgroundColor: "rgb(229, 229, 226)",
                    objectPosition: "50% 50%",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;