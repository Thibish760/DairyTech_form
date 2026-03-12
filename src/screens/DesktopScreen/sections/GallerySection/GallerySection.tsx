// export const GallerySection = (): JSX.Element => {
  // const projects = [
  //   { 
  //     src: "/image-184.png", 
  //     alt: "Dairy Farm Setup",
  //     title: "Dairy Farm Setup",
  //   },
  //   { 
  //     src: "/image-178.png", 
  //     alt: "Maintaining Farm House",
  //     title: "Maintaining Farm House",
  //   },
  //   { 
  //     src: "/image-182.png", 
  //     alt: "Fodder Management System",
  //     title: "Fodder Management System",
  //   },
  //   { 
  //     src: "/image-183.png", 
  //     alt: "Cleaning Farm House",
  //     title: "Cleaning Farm House",
  //   },
  // ];

//   return (
//     <section className="w-full bg-gradient-to-r from-gray-100 via-blue-50 to-gray-50 py-16 sm:py-20 md:py-24">
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
//         {/* Header */}
//         <div className="mb-12 sm:mb-16">
//           {/* <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
//             Recently Completed
//           </span> */}
//           <h2 className="font-sans font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
//             Recently Completed 
//           </h2>
//           <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
//             Affordable rental of well-maintained farming equipment to support your agricultural needs. Innovative irrigation solutions to ensure efficient water use and healthy crops.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
//           {projects.map((project, index) => (
//             <div key={index} className="group cursor-pointer">
//               <div className="relative h-35 sm:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-200">
//                 <img 
//                   src={project.src} 
//                   alt={project.alt} 
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 {/* Dark Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 flex flex-col justify-end p-6">
//                   <h3 className="text-white font-sans font-bold text-xl sm:text-2xl leading-tight">
//                     {project.title}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Dots */}
//         {/* <div className="flex items-center justify-start gap-3">
//           <button className="w-10 h-10 rounded-full border-2 border-gray-400 hover:border-gray-600 transition-colors flex items-center justify-center">
//             <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <button className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 transition-colors"></button>
//         </div> */}
//       </div>
//     </section>
//   );
// };

export const GallerySection = (): JSX.Element => {
  const projects = [
    { 
      src: "/image-184.png", 
      alt: "Dairy Farm Setup",
      title: "Dairy Farm Setup",
    },
    { 
      src: "/image-178.png", 
      alt: "Maintaining Farm House",
      title: "Maintaining Farm House",
    },
    { 
      src: "/image-182.png", 
      alt: "Fodder Management System",
      title: "Fodder Management System",
    },
    { 
      src: "/image-183.png", 
      alt: "Cleaning Farm House",
      title: "Cleaning Farm House",
    },
  ];

  return (
    <section className=" bg-white py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Side Yellow Background Box */}
      {/* This box starts from the left and covers roughly 80% of the bottom half */}
      <div 
        className="absolute bottom-0 left-0 w-[85%] h-[50%] bg-[#F7F1D7] -z-10 rounded-tr-[40px]" 
        aria-hidden="true"
      />
       
       
      <div className="max-w-[1305px]  mx-auto  relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl ">
            <div className="h-9  w-1  bg-[#8dc63f] rounded-full" />
            <h2 className="font-sans  font-bold text-[#1D2939] text-3xl sm:text-4xl md:text-4xl leading-tight">
              Recently Completed Project
            </h2>

            <span className="inline-block mt-4 border border-green-600/30 text-green-700 px-4 py-1.5 rounded-full text-xs font-medium mb-4">
              Recently Completed
            </span>

          </div>
          <div className="md:max-w-sm">
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Affordable rental of well-maintained farming equipment to support your agricultural needs. Innovative irrigation solutions to ensure efficient water use and healthy crops.
            </p>
          </div>
        </div>


                {/* <div className="flex items-center mt-10 justify-between mb-8 sm:mb-10 md:mb-14">
          <div className="flex  gap-1">
            <div className="h-9  w-1 ml-20 mb-17  bg-[#8dc63f] rounded-full" />
            <h2 className="font-sans font-bold text-[#1D2939] text-3xl sm:text-4xl md:text-4xl leading-tight">
              Recently Completed Project
            </h2>

            <span className="inline-block mt-4 border border-green-600/30 text-green-700 px-4 py-1.5 rounded-full text-xs font-medium mb-4">
              Recently Completed
            </span>
          
          
          <div className="md:max-w-sm">
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Affordable rental of well-maintained farming equipment to support your agricultural needs. Innovative irrigation solutions to ensure efficient water use and healthy crops.
            </p>
          </div>
          </div>
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative h-[400px] sm:h-[450px] rounded-xl overflow-hidden shadow-md bg-gray-200">
                <img 
                  src={project.src} 
                  alt={project.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay with Text at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-sans font-bold text-xl leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {/* <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-white transition-all shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="w-12 h-12 rounded-full bg-[#3D6E0D] flex items-center justify-center text-white hover:bg-[#2D520A] transition-all shadow-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};