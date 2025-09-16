import { About } from "../About/About";
import { BlogSection } from "../components/blog-section";
import { TestimonialSection } from "../components/testimonial-section";
import { EducationExperience } from "../skills/education-experience";
import { Portfolio } from "../skills/portfolio";
import { SkillsAndServices } from "../skills/skills-services";
import { Home } from "./Home";

export const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center mx-auto">
     <div className="mx-auto"><Home /></div> 
     <div className="mx-auto w-[90%]"> <About /></div>
     <div className="mx-auto "> <SkillsAndServices /></div>
     <div className="mx-auto"> <EducationExperience /></div>
     <div className="mx-auto w-[75%]"> <Portfolio /></div>
     <div className="mx-auto w-[90%]"> <TestimonialSection /></div>
     <div className="mx-auto w-[90%]"> <BlogSection /></div>

    


    </section>
  );
};
 