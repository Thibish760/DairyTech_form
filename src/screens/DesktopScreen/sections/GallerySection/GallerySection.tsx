export const GallerySection = (): JSX.Element => {
  const galleryImages = [
    {
      src: "/image-184.png",
      alt: "Dairy cow close-up",
      className: "col-span-2 row-span-2",
    },
    {
      src: "/image-182.png",
      alt: "Milking facility interior",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/image-178.png",
      alt: "Automated milking system",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/image-183.png",
      alt: "Milking parlor view",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/image-180.png",
      alt: "Dairy facility equipment",
      className: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-black text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 md:mb-8">
          Gallery
        </h2>

        <div className="hidden sm:grid grid-cols-4 grid-rows-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.className} overflow-hidden rounded-[10.16px]`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <p className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#84827d] text-[11px] sm:text-[12px] md:text-[13.2px] text-center max-w-4xl mx-auto leading-relaxed">
          THE SYSTEM OPERATES EFFICIENTLY WITH CONTROLLED SUCTION AND PULSATION
          TO MAINTAIN COMFORT AND MILK QUALITY, AUTOMATICALLY STOPPING ONCE
          MILKING IS COMPLETE TO PREVENT OVER-MILKING.
        </p>
      </div>
    </section>
  );
};
