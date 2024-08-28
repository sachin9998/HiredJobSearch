import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            and get{" "}
            <img
              className="h-14 sm:h-24 lg:32"
              src="./logo.png"
              alt="Hirrd Logo"
            />
          </span>
        </h1>

        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      {/* Buttons */}
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>

        <Link to={"/post-job"}>
          <Button variant="destructive" size="xl">
            Post a Jobs
          </Button>
        </Link>
      </div>

      {/* Company Banners aka Carousel */}
      <div>
        <Carousel
          plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
          className="w-full py-10"
        >
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({ name, id, path }) => {
              return (
                <CarouselItem className="basis-1/3 lg:basis-1/6" key={id}>
                  <img className="h-9 sm:h-14 " src={path} alt={name} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      <section>{/* Cards */}</section>

      {/* Accordian */}
    </main>
  );
};

export default LandingPage;
