import AliceCarousel from "react-alice-carousel";
import { HomeSectionCard } from "../HomeSectionCard/homesectioncard";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useState} from "react";


export const HomeCardCarousel = ({data,SectionName}) => {

  const[activeIndex,setActiveIndex]=useState(0);

  const items = data.slice(0,10).map((item, index) => <HomeSectionCard key={index} product={item} />);

  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=()=>({item})=>setActiveIndex(item);

  const responsive = {
    0: { items: 1 },
    768: { items: 4 },
    1080: { items: 6 },
  };

  return (
    <div className="px-4 lg:px-8">

      <h2 className="text-2l font-extrabold text-gray-800 py-5">{SectionName}</h2>
      <div className="relative p-5">

        <AliceCarousel
          disableButtonsControls
          items={items}
          responsive={responsive}
          infinite
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {/* Right Arrow Button */}
      {activeIndex!==(items.activeIndex-5) && <Button
        variant="contained"
        className="z-50 bg-white"
        onClick={slideNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(50%) rotate(90deg)", // Center vertically
          bgcolor: "white",
          boxShadow: "none",
        }}
        aria-label="next slide"
      >
        <KeyboardArrowRightIcon sx={{ color: "black" }} />
      </Button>}

        {/* Left Arrow Button */}
        {activeIndex!==0 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(50%) rotate(-90deg)", // Center vertically
            bgcolor: "white",
            boxShadow: "none",
          }}
          aria-label="previous slide"
         
        >
          <KeyboardArrowLeftIcon sx={{ color: "black" }} />
        </Button>}
      </div>
    </div>
  );
};
