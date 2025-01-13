import react from "react";
import MainCarousel from "../../components/HomeCarousel/maincarousel.jsx";
import { HomeCardCarousel } from "../../components/HomeSectionCardCarousel/homecardcarousel.jsx";

export function HomePage()
{
    return <div>
        <MainCarousel></MainCarousel>
        
        <div>
            <HomeCardCarousel/>
        </div>

    </div>
}
