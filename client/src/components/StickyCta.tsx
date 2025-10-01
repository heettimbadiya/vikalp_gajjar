import { useEffect, useState } from "react";
import { Link } from "wouter";

export const StickyCta = ({ product }: {product: string}) => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e && e.target) {
          setShow(!e.isIntersecting);
        }
      },
      { rootMargin: "-320px 0px 0px 0px" }
    );
    
    const mainElement = document.querySelector("main");
    if (mainElement) {
      io.observe(mainElement);
      
      return () => {
        io.unobserve(mainElement);
        io.disconnect();
      };
    }
    
    return () => {
      io.disconnect();
    };
  }, []);
  
  return show ? (
    <div className="fixed bottom-0 md:bottom-auto md:right-6 md:top-1/2 md:-translate-y-1/2 z-40 w-full md:w-auto">
      <Link href={`/contact?product=${product}`}>
        <button className="w-full md:w-auto h-11 px-6 rounded-md bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors">
          Enquire Now
        </button>
      </Link>
    </div>
  ) : null;
};