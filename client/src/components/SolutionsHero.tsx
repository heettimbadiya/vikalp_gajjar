import { Link } from "wouter";

interface Solution { 
  name: string; 
  slug: string; 
}

export default function SolutionsHero({ solutions }: { solutions: Solution[] }) {
  return (
    <section className="solutions-hero py-8 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          Explore Our Industry Solutions
        </h2>
        <div className="solutions-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
          {solutions.map(sol => (
            <Link key={sol.slug} href={`/solutions/${sol.slug}`}>
              <span
                className="bg-white/20 hover:bg-white/30 text-white text-center py-3 rounded-full block focus:ring-2 focus:ring-white transition-all duration-300 cursor-pointer break-words"
                aria-label={`Go to ${sol.name} solutions`}
              >
                {sol.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}