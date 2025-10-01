import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Search, Lightbulb } from "lucide-react";

interface ModelSpec {
  [key: string]: string | number;
}

interface IntelligentModelAssistantProps {
  specModels: ModelSpec[];
  productCategory: string;
}

export default function IntelligentModelAssistant({ specModels, productCategory }: IntelligentModelAssistantProps) {
  const [capacity, setCapacity] = useState("");
  const [feedSize, setFeedSize] = useState("");
  const [filteredModels, setFilteredModels] = useState<number[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const findMatchingModels = () => {
    const capacityNum = parseFloat(capacity);
    const feedSizeNum = parseFloat(feedSize);
    
    const matches: number[] = [];
    
    specModels.forEach((model, index) => {
      let isMatch = true;
      
      // Check capacity match
      if (capacity && capacityNum) {
        const modelCapacity = String(model["Capacity (TPH)"] || model["Capacity"] || "");
        if (modelCapacity.includes("–") || modelCapacity.includes("-")) {
          const [min, max] = modelCapacity.split(/[–-]/).map(s => parseFloat(s.trim()));
          if (capacityNum < min || capacityNum > max) {
            isMatch = false;
          }
        } else {
          const modelCapacityNum = parseFloat(modelCapacity);
          if (Math.abs(modelCapacityNum - capacityNum) > modelCapacityNum * 0.2) {
            isMatch = false;
          }
        }
      }
      
      // Check feed size match for crushers
      if (feedSize && feedSizeNum && productCategory === "Crushers") {
        const feedOpening = String(model["Feed Opening (mm)"] || model["Feed Opening"] || "");
        if (feedOpening.includes("x")) {
          const dimensions = feedOpening.split("x").map(s => parseFloat(s.trim()));
          const minDimension = Math.min(...dimensions);
          if (feedSizeNum > minDimension * 0.8) {
            isMatch = false;
          }
        }
      }
      
      if (isMatch) {
        matches.push(index);
      }
    });
    
    setFilteredModels(matches);
    setHasSearched(true);
  };

  const resetSearch = () => {
    setCapacity("");
    setFeedSize("");
    setFilteredModels([]);
    setHasSearched(false);
  };

  return (
    <Card className="mb-8 border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50">
      <CardHeader>
        <CardTitle className="flex items-center text-xl text-blue-600">
          <Lightbulb className="w-6 h-6 mr-3 text-blue-600" />
          Find Your Perfect Model
        </CardTitle>
        <p className="text-blue-600">
          Enter your requirements below and we'll highlight the models that best match your needs.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <Label htmlFor="capacity" className="text-blue-800 font-medium">
              Required Capacity (TPH)
            </Label>
            <Input
              id="capacity"
              type="number"
              placeholder="e.g., 150"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="mt-1 border-blue-200 focus:border-blue-500"
            />
          </div>
          
          {productCategory === "Crushers" && (
            <div>
              <Label htmlFor="feedSize" className="text-blue-800 font-medium">
                Max Feed Size (mm)
              </Label>
              <Input
                id="feedSize"
                type="number"
                placeholder="e.g., 500"
                value={feedSize}
                onChange={(e) => setFeedSize(e.target.value)}
                className="mt-1 border-blue-200 focus:border-blue-500"
              />
            </div>
          )}
          
          <div className="flex items-end gap-2">
            <Button 
              onClick={findMatchingModels}
              className="bg-blue-600 hover:bg-blue-700 flex-1"
              disabled={!capacity && !feedSize}
            >
              <Search className="w-4 h-4 mr-2" />
              Find Models
            </Button>
            {hasSearched && (
              <Button 
                variant="outline" 
                onClick={resetSearch}
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Reset
              </Button>
            )}
          </div>
        </div>
        
        {hasSearched && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
            {filteredModels.length > 0 ? (
              <div className="flex items-center text-green-700">
                <Badge variant="secondary" className="bg-green-100 text-green-800 mr-2">
                  {filteredModels.length} Match{filteredModels.length !== 1 ? 'es' : ''}
                </Badge>
                <span>Models highlighted below meet your requirements</span>
              </div>
            ) : (
              <div className="flex items-center text-amber-700">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 mr-2">
                  No Direct Matches
                </Badge>
                <span>Consider adjusting your requirements or contact us for custom solutions</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}