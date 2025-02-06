import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="w-full max-w-[1000px]">
        <div className="flex flex-col lg:flex-row items-center bg-[#2A254B] text-white rounded-lg shadow-lg min-h-[500px] relative lg:mx-auto">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left p-6 lg:p-12 z-10">
            {/* Heading */}
            <h2 className="text-[28px] md:text-[32px] font-semibold leading-tight">
              The furniture brand for the future, with timeless designs
            </h2>

            {/* Button for larger screens */}
            <button className="hidden lg:block bg-gray-50 bg-opacity-15 text-[#2A254B] w-[60%] py-2 mt-6 font-medium hover:bg-gray-50 transition-all">
              View collection
            </button>

            {/* Paragraph */}
            <p className="text-sm md:text-base leading-6 mt-8 font-light">
              A new era in eco-friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>

          {/* Right Content - Image Covering Half with Adjusted Size */}
          <div className="absolute right-0 top-0 h-full w-full lg:w-[50%] lg:h-[500px]">
            <Image
              src="/images/hero.png"
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
