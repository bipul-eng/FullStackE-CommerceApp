import AliceCarousel from "react-alice-carousel";
import { HomeSectionCard } from "../HomeSectionCard/homesectioncard";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


export const HomeCardCarousel = () => {

     const items=[1,1,1,1,1].map((item)=><HomeSectionCard/>)

    const responsive = {
        0: { items: 1 },
        768: { items: 3 },
        1024: { items: 5 },
    };

    return <div className="relative px-4 lg:px-8">
     <div className="relative p-5">
     <AliceCarousel
        disableButtonsControls
        items={items}
        responsive={responsive} 
        infinite      
     />

        <Button variant="contained" className="z-50 bg-white" sx={{position:'absolute',top:"8rem" , right:"0rem" , transform:"translate(50%) rotate(90deg)", bgcolor:"white"}}
        aria-label="next">
          <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}}></KeyboardArrowLeftIcon>
        </Button>

        <Button variant="contained" className="z-50 bg-white" sx={{position:'absolute',top:"8rem" , left:"0rem" , transform:"translate(50%) rotate(-90deg)", bgcolor:"white"}}
        aria-label="next">
          <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}}></KeyboardArrowLeftIcon>
        </Button>

     </div>
</div>
};