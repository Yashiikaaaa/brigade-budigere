import React from 'react';
import mapPointer from '../assets/location/markerGodrejGreen.png'; // Importing map pointer icon
import Button from '../components/button/buttonMain'; // Import the reusable Button component

export const Location = () => {
  return (
    <section id="Location" className="max-w-full flex flex-col items-center bg-white">
      {/* Location Section Header and Info */}
      <div className="w-full flex flex-col md:flex-row items-center py-7 md:py-14 gap-6 md:gap-14">
        
        {/* Title and Location Info */}
        <div className="flex flex-col items-center md:items-start w-full px-6 md:pl-[7.5rem] md:justify-between gap-6 text-center md:text-left lg:max-w-lg"> 
          {/* Center items on mobile view, align left on larger screens */}
          
          <div className="flex md:flex-col items-center md:items-start w-full  md:px-2 gap-2 md:gap-6 ">
            
            <div className='flex flex-col items-center md:items-start w-full lg:px-2 gap-3 md:gap-6 '>
              {/* Section Title */}
              <h1 className="text-3xl md:text-5xl font-subheading font-normal text-black uppercase">Location</h1> 
              {/* Location Address with Map Pointer */}
              <div className="flex items-center justify-center md:justify-start">
                <img src={mapPointer} alt="Map Pointer" className="w-3 h-3 md:w-5 md:h-5 mr-2" />
                <p className="text-xs md:text-xl font-body font-medium">
                  Budigere Road, Bengaluru
                </p>
              </div>
            </div>

            <ol className='text-left font-body text-xs md:text-base list-disc font-medium pl-1 md:pl-5 hidden sm:block space-y-3'>
                  <li className=''>Direct access to Budigere Main Road </li>
                <li className=''>Seamless connectivity to Whitefield & ITPL</li>
                <li className=''>Easy reach to Outer Ring Road & Old Madras Road</li>
                <li className=''>Smooth drive to Kempegowda International Airport</li>
                <li className=''>Close to Bengaluru’s fast-growing IT & commercial hubs</li>
                {/* <li className=''>10 mins- Decathon Chandapura Market </li> */}
            </ol>
          </div>

          {/* Google Maps Button */}
          <div className="text-center md:text-left w-fit">
            <Button 
              text="Open in Google Maps" // Button text
              className="whitespace-nowrap"  // Prevent text wrapping
              onClick={() => window.open("https://maps.app.goo.gl/sdYZCSUthSrF8Z8N7", "_blank")} // Opens Google Maps link in a new tab
            />
          </div>
        </div>
              {/* Google Maps Iframe */} 
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 min-h-[60vh]">
          <iframe src="https://www.google.com/maps/embed?pb=!4v1770724346569!6m8!1m7!1s6QQICyo_tAe67NsL3NRbJA!2m2!1d13.04782600826047!2d77.74948438198058!3f170.23!4f0.6200000000000045!5f0.7820865974627469" 

      className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
                 </div>
                     </div>
                    
      </div>
    </section>
  );
};
