import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

interface ProductSpec {
  id: number;
  name: string;
  feed_opening: string;
  capacity: string;
  motor_power: string;
  weight: number;
  applications: string[];
}

export default function TechnicalSpecs() {
  const { data: specifications = [] } = useQuery<ProductSpec[]>({
    queryKey: ["/api/specifications/crushers"],
  });

  // Mock data for demonstration since API might not return data initially
  const mockSpecs = [
    {
      id: 1,
      name: "DTJ-600×400",
      feed_opening: "600×400",
      capacity: "20-60 TPH",
      motor_power: "30-37 kW",
      weight: 6.5,
      applications: ["Granite", "Limestone"],
    },
    {
      id: 2,
      name: "DTJ-750×500",
      feed_opening: "750×500",
      capacity: "40-85 TPH",
      motor_power: "45-55 kW",
      weight: 10.2,
      applications: ["Hard Rock", "Quartzite"],
    },
    {
      id: 3,
      name: "DTJ-900×650",
      feed_opening: "900×650",
      capacity: "90-180 TPH",
      motor_power: "75-90 kW",
      weight: 15.8,
      applications: ["Basalt", "Concrete"],
    },
  ];

  const displaySpecs = specifications.length > 0 ? specifications : mockSpecs;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Specifications</h2>
          <p className="text-slate-600 text-lg">Detailed specifications for informed decision-making</p>
        </div>
        
        <Card className="bg-slate-50 border-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Model</th>
                  <th className="px-6 py-4 text-left font-semibold">Feed Opening (mm)</th>
                  <th className="px-6 py-4 text-left font-semibold">Capacity</th>
                  <th className="px-6 py-4 text-left font-semibold">Motor Power</th>
                  <th className="px-6 py-4 text-left font-semibold">Weight (tons)</th>
                  <th className="px-6 py-4 text-left font-semibold">Applications</th>
                </tr>
              </thead>
              <tbody className="text-slate-900">
                {displaySpecs.map((spec) => (
                  <tr key={spec.id} className="border-b border-slate-200 hover:bg-slate-100 transition-colors">
                    <td className="px-6 py-4 font-semibold">{spec.name}</td>
                    <td className="px-6 py-4">{spec.feed_opening}</td>
                    <td className="px-6 py-4">{spec.capacity}</td>
                    <td className="px-6 py-4">{spec.motor_power}</td>
                    <td className="px-6 py-4">{spec.weight}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {spec.applications.map((app, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className={idx % 2 === 0 ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}
                          >
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        
        <div className="text-center mt-8 space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Download Complete Specs
          </Button>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Compare Models
          </Button>
        </div>
      </div>
    </section>
  );
}
