import { Card, CardContent } from "@/components/ui/card";
import { Award, Drill, Headphones } from "lucide-react";

export default function GlobalPresence() {
  const stats = [
    { value: "85+", label: "Countries Served" },
    { value: "2,500+", label: "Installations" },
    { value: "25+", label: "Years Experience" },
    { value: "24/7", label: "Global Support" },
  ];

  const credentials = [
    {
      icon: Award,
      title: "ISO Certified",
      description: "ISO 9001:2015 quality management and ISO 14001:2015 environmental standards.",
    },
    {
      icon: Drill,
      title: "Expert Engineering",
      description: "In-house R&D team with decades of material processing expertise.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Global service network ensuring minimal downtime and maximum productivity.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Industrial Excellence</h2>
          <p className="text-slate-600 text-lg">Trusted by industry leaders worldwide</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <Card key={index} className="bg-white shadow-sm border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="text-2xl text-amber-500 mr-3 h-8 w-8" />
                    <h3 className="text-lg font-semibold text-slate-900">{credential.title}</h3>
                  </div>
                  <p className="text-slate-600">{credential.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
