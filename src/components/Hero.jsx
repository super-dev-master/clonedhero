import React from 'react';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M 10 18.5 C 14.694 18.5 18.5 14.694 18.5 10 C 18.5 5.306 14.694 1.5 10 1.5 C 5.306 1.5 1.5 5.306 1.5 10 C 1.5 14.694 5.306 18.5 10 18.5 Z"
      fill="#FCFCFA"
    />
    <path
      d="M 13.854 7.146 C 14.049 7.342 14.049 7.658 13.854 7.854 L 8.854 12.854 C 8.658 13.049 8.342 13.049 8.146 12.854 L 5.646 10.354 C 5.451 10.158 5.451 9.842 5.646 9.646 C 5.842 9.451 6.158 9.451 6.354 9.646 L 8.5 11.793 L 13.146 7.146 C 13.342 6.951 13.658 6.951 13.854 7.146 Z"
      fill="#272724"
    />
  </svg>
);

const HERO_BG_IMG =
  "https://framerusercontent.com/images/9H71gNu2vwxCCu0axWX1p2xHSZ0.png";
const HERO_BG_SRCSET =
  "https://framerusercontent.com/images/9H71gNu2vwxCCu0axWX1p2xHSZ0.png?scale-down-to=512 512w,https://framerusercontent.com/images/9H71gNu2vwxCCu0axWX1p2xHSZ0.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9H71gNu2vwxCCu0axWX1p2xHSZ0.png 1600w";

const Hero = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      {/* Top white space with centered brand */}
      <div className="px-6 pt-8 pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <span className="text-2xl lg:text-3xl font-light tracking-wider">time—line</span>
          </div>
        </div>
      </div>
      {/* Main hero section with background image and blurred overlay */}
      <div className="max-w-12xl mx-auto px-6 pb-8">
        <div className="relative rounded-3xl min-h-[80vh] overflow-hidden">
          {/* Background Image (layer 1) */}
          <img
            decoding="async"
            width="1600"
            height="1600"
            sizes="min(100vw - 24px, 1920px)"
            srcSet={HERO_BG_SRCSET}
            src={HERO_BG_IMG}
            alt=""
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              objectPosition: "center center",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
              zIndex: 0,
              pointerEvents: "none",
              userSelect: "none"
            }}
            aria-hidden="true"
          />
          {/* Overlay for blur and darkening (layer 2) */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: 'blur(60px)',
              backgroundColor: 'var(--token-a4c5d89a-0c3e-463a-b93e-26f9aa45b421, rgba(0, 0, 0, 0.38))',
              opacity: 1,
              zIndex: 1,
              pointerEvents: "none",
              borderRadius: "inherit"
            }}
            aria-hidden="true"
          />
          {/* Content (layer 3) */}
          <div className="relative z-10">
            <div className="container mx-auto px-6 py-20 pt-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side */}
                <div className="space-y-8 text-white">
                  {/* Powered by badge */}
                  <div className="inline-flex items-center gap-2">
                    <span className="text-white text-sm">Powered by</span>
                    {/* Mitopure SVG logo */}
                    <svg width="86" height="24" fill="none" id="svg-2126575110_5623"><path d="M73.404 24H12C5.404 24 0 18.596 0 12S5.404 0 12 0h61.404c6.596 0 12 5.404 12 12s-5.404 12-12 12Z" fill="#C23F3F"></path><path fillRule="evenodd" clipRule="evenodd" d="M48.443 8.425c.72.425 1.303.998 1.718 1.718a4.41 4.41 0 0 1 .61 2.43 4.669 4.669 0 0 1-1.922 3.834c-.85.61-1.82.914-2.919.914-.73 0-1.413-.148-2.032-.434l-.014-.007c-.07-.036-.143-.073-.143.109v3.99c0 .157-.028.268-.092.324-.065.055-.167.083-.315.083h-1.006c-.148 0-.25-.028-.305-.083-.056-.056-.083-.167-.083-.324v-5.302c0-.166.046-.323.138-.462l1.312-2.042c.102-.166.351-.092.351.102v.933c0 .23.083.462.259.628.157.148.314.277.498.379a2.68 2.68 0 0 0 1.46.406c.527 0 1.016-.138 1.478-.406a2.873 2.873 0 0 0 1.09-1.09c.268-.471.397-.98.397-1.552a3.16 3.16 0 0 0-.388-1.57 2.962 2.962 0 0 0-1.062-1.1 2.792 2.792 0 0 0-1.478-.397 2.83 2.83 0 0 0-1.487.397 2.845 2.845 0 0 0-1.044 1.1s-2.291 3.667-2.476 3.981a4.652 4.652 0 0 1-1.746 1.718 4.977 4.977 0 0 1-2.457.62c-.878 0-1.672-.204-2.393-.62a4.532 4.532 0 0 1-1.7-1.718 4.878 4.878 0 0 1-.618-2.411 4.722 4.722 0 0 1 1.903-3.843 4.786 4.786 0 0 1 2.891-.933c.896 0 1.7.203 2.43.628.72.425 1.293.998 1.718 1.718a4.3 4.3 0 0 1 .36.786c.028.064.11.064.139 0a4.562 4.562 0 0 1 2.079-2.504 4.809 4.809 0 0 1 2.429-.628c.887 0 1.7.203 2.42.628ZM38.31 15.196c.462-.258.813-.628 1.118-1.062.277-.397.573-.951.813-1.432a.352.352 0 0 0 0-.305 11.894 11.894 0 0 0-.84-1.413c-.306-.443-.61-.831-1.054-1.1a2.848 2.848 0 0 0-1.487-.397c-.555 0-1.044.13-1.488.398a2.937 2.937 0 0 0-1.053 1.099c-.25.462-.378.988-.378 1.57 0 .573.129 1.09.378 1.552.259.462.6.832 1.044 1.09.444.278.924.407 1.46.407.536 0 1.025-.139 1.487-.407ZM8.49 8.02c-.157 0-.277.037-.35.11-.075.074-.112.185-.112.352v8.295c0 .12.028.213.074.259.046.046.139.074.259.074h1.155c.11 0 .194-.028.24-.074.046-.046.074-.139.074-.259v-4.545c0-.877.166-1.561.517-2.032.351-.471.84-.712 1.487-.712.647 0 1.137.231 1.488.712.341.48.517 1.155.517 2.032v4.545c0 .12.028.213.083.259a.382.382 0 0 0 .25.074h1.145c.11 0 .194-.028.24-.074.046-.046.074-.139.074-.259v-4.545c0-.877.176-1.561.527-2.032.35-.471.85-.712 1.496-.712.647 0 1.137.231 1.478.712.333.48.508 1.155.508 2.032v4.545c0 .12.028.213.084.259a.382.382 0 0 0 .249.074h1.173a.354.354 0 0 0 .24-.074c.046-.046.074-.139.074-.259v-4.674c0-1.377-.277-2.43-.85-3.169-.563-.73-1.395-1.1-2.466-1.1-.61 0-1.173.149-1.7.444-.527.287-.96.72-1.293 1.321-.555-1.173-1.497-1.764-2.836-1.764-.518 0-.998.101-1.423.314a2.86 2.86 0 0 0-1.062.905v-.572c0-.158-.046-.278-.12-.352-.083-.073-.204-.11-.36-.11h-.86Zm15.658-3.871c-.332 0-.61.11-.822.323-.212.213-.314.49-.314.822 0 .333.102.6.314.813.213.213.49.324.822.324a1.121 1.121 0 0 0 1.155-1.137c0-.332-.11-.61-.332-.822a1.121 1.121 0 0 0-.823-.323Zm-.48 3.87c-.157 0-.259.028-.323.084-.056.055-.093.157-.093.323v8.277c0 .157.037.268.093.323.064.056.175.084.323.084h.98c.147 0 .258-.028.313-.084.056-.055.093-.166.093-.323V8.425c0-.166-.028-.268-.093-.323-.055-.056-.166-.083-.314-.083h-.979Zm2.605 1.553c.056.064.166.092.324.092v.01h1.625v7.03c0 .156.037.267.093.323.064.055.175.083.323.083h.97c.148 0 .25-.028.314-.084.065-.055.093-.166.093-.323v-7.03h1.653c.166 0 .268-.037.323-.092.056-.065.084-.166.084-.314v-.84c0-.149-.028-.25-.084-.315-.055-.065-.166-.092-.323-.092h-1.654V5.977c0-.157-.027-.268-.092-.323-.065-.056-.166-.083-.314-.083h-.96c-.158 0-.26.027-.324.083-.065.055-.092.166-.092.323V8.01h-1.636c-.157 0-.267.028-.323.093-.055.064-.083.166-.083.314v.84c0 .148.028.25.083.315ZM52.305 8.01c-.11 0-.194.028-.24.074-.055.056-.083.139-.074.268v4.693c0 1.386.351 2.439 1.035 3.169.693.739 1.681 1.099 2.984 1.099 1.302 0 2.31-.36 3.002-1.1.693-.738 1.035-1.791 1.035-3.168V8.351c0-.12-.028-.212-.074-.258-.046-.056-.13-.074-.24-.074h-1.155a.382.382 0 0 0-.25.074c-.055.046-.083.138-.083.258v4.536c0 1.83-.748 2.744-2.244 2.744-1.47 0-2.208-.915-2.208-2.744V8.342c0-.12-.028-.213-.083-.259-.056-.055-.139-.074-.25-.074h-1.155Zm9.839 0c-.166 0-.277.037-.324.093-.046.064-.073.185-.064.35v8.315c0 .12.027.212.074.259.046.046.138.073.258.073h1.146c.11 0 .194-.027.24-.073.046-.047.074-.139.074-.26V12.37c0-.952.194-1.645.6-2.07.407-.425 1.007-.637 1.811-.637h.434c.166 0 .277-.037.342-.102.065-.064.102-.184.102-.36v-.914c0-.176-.028-.296-.093-.36-.064-.065-.175-.102-.35-.102h-.167c-1.21 0-2.097.434-2.679 1.302v-.674c0-.157-.028-.277-.083-.342-.056-.065-.157-.102-.323-.102h-.998Zm13.127 8.185c.13-.083.203-.194.203-.314a.709.709 0 0 0-.065-.259l-.406-.683c-.055-.111-.139-.167-.24-.167a.562.562 0 0 0-.296.111c-.831.555-1.7.832-2.614.832-.564 0-1.053-.111-1.478-.342a2.726 2.726 0 0 1-1.035-.96 3.086 3.086 0 0 1-.462-1.396h6.827c.11 0 .194-.027.24-.074.046-.046.074-.138.074-.258v-.314c0-.85-.185-1.626-.563-2.328a4.188 4.188 0 0 0-1.58-1.654c-.674-.406-1.441-.61-2.291-.61a4.45 4.45 0 0 0-2.337.629 4.436 4.436 0 0 0-1.635 1.718c-.398.73-.6 1.552-.6 2.466 0 .878.202 1.672.59 2.393a4.28 4.28 0 0 0 1.645 1.7c.711.406 1.533.619 2.457.619 1.377 0 2.559-.37 3.566-1.109Zm-3.723-6.882c.684 0 1.247.212 1.7.637.462.434.739.989.84 1.682h-5.173c.176-.74.499-1.312.96-1.719.454-.397 1.017-.6 1.673-.6Zm7.215-2.92c0-1.33-.989-2.235-2.217-2.235-1.23 0-2.227.905-2.227 2.236 0 1.311.998 2.217 2.227 2.217 1.228 0 2.217-.896 2.217-2.217Zm-.434 0c0 1.09-.758 1.82-1.783 1.82-.998 0-1.783-.73-1.783-1.82 0-1.108.785-1.838 1.783-1.838 1.025 0 1.782.74 1.782 1.839Zm-1.82.195h.11l.48.914h.537l-.545-1.007c.295-.138.425-.37.425-.628 0-.61-.425-.739-1.118-.739h-.72v2.356h.489v-.896h.342Zm-.342-1.072h.314c.332 0 .554.065.545.351 0 .231-.148.351-.517.351h-.342v-.702Z" fill="#FCFCFA"></path></svg>
                  </div>
                  {/* Headline */}
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                      Introducing NEW Mitopure® Gummies
                    </h1>
                  </div>
                  {/* Features */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white flex-shrink-0 mt-1 flex items-center justify-center">
                        <CheckIcon />
                      </div>
                      <span className="text-lg">500mg Mitopure for cellular function &amp; healthy aging*</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white flex-shrink-0 mt-1 flex items-center justify-center">
                        <CheckIcon />
                      </div>
                      <span className="text-lg">Sugar-free strawberry gummies free from artificial ingredients</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white flex-shrink-0 mt-1 flex items-center justify-center">
                        <CheckIcon />
                      </div>
                      <span className="text-lg">Proven benefits supported by 15+ years of research</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white flex-shrink-0 mt-1 flex items-center justify-center">
                        <CheckIcon />
                      </div>
                      <span className="text-lg">Formulated in Switzerland &amp; made in the U.S.A.</span>
                    </div>
                  </div>
                  {/* Product Card */}
                  <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6 max-w-md">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <img decoding="async" width="1600" height="1600" sizes="40px" srcSet="https://framerusercontent.com/images/pDNPQ8RUsKQDxj1GeU7O0Wl2fQ.png" alt="" />
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
                {/* Right side: video + overlay card */}
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden flex flex-col items-center" style={{ borderRadius: 12, opacity: 1 }}>
                    <div className="w-full h-[600px] flex items-center justify-center relative" style={{ opacity: 1 }}>
                      {/* Overlay card */}
                      <div
                        className="absolute bottom-6 bg-[#FCFCFA] rounded-lg shadow-lg px-4 py-3 z-10"
                        style={{
                          borderRadius: 6,
                          boxShadow:
                            "rgba(0, 0, 0, 0.06) 0px 6px 24px 0px, rgba(0, 0, 0, 0.06) 0px 1px 4px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px"
                        }}
                      >
                        <div className="flex flex-col items-center">
                          <h3 className="text-[28px] font-light text-[#C23F3F] leading-[1.2] mb-1">#1</h3>
                          <p className="text-[12px] font-medium text-[#272724] leading-[1.5] mb-0.5">
                            Doctor Recommended
                          </p>
                          <p className="text-[12px] text-black opacity-60 leading-[1.5]">
                            Urolithin A Brand
                          </p>
                        </div>
                      </div>
                      {/* Video */}
                      <video
                        src="https://res.cloudinary.com/dcxo7cldm/video/upload/v1745402280/Header_Gummies_V4_no_sound_track_sjvyqw.mp4"
                        poster="https://framerusercontent.com/images/9H71gNu2vwxCCu0axWX1p2xHSZ0.png"
                        autoPlay
                        loop
                        playsInline
                        muted
                        className="w-full h-full object-cover rounded-xl"
                        style={{
                          borderRadius: 12,
                          backgroundColor: "rgb(229, 229, 226)",
                          objectPosition: "50% 50%",
                          display: "block"
                        }}
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Hero;