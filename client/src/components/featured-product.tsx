import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Box, Eye, Play, Wrench, RotateCcw, ZoomIn, Scissors, Mouse } from "lucide-react";

export default function FeaturedProduct() {
  const handleLaunch3DViewer = () => {
    // This would initialize the WebAssembly 3D viewer
    console.log("Initializing WebAssembly 3D viewer for Double Toggle Jaw Crusher");
    alert("3D Viewer would launch here - powered by WebAssembly for high-performance visualization");
  };

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Interactive 3D Product Viewer
              <span className="block text-amber-500">Double Toggle Jaw Crusher</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Experience our revolutionary WebAssembly-powered 3D viewer. Explore internal components, understand operation principles, and visualize maintenance points - all in your browser.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Box className="text-amber-500 mr-3 h-5 w-5" />
                <span>Interactive 3D manipulation</span>
              </div>
              <div className="flex items-center">
                <Eye className="text-amber-500 mr-3 h-5 w-5" />
                <span>X-ray view of internal components</span>
              </div>
              <div className="flex items-center">
                <Play className="text-amber-500 mr-3 h-5 w-5" />
                <span>Animated operation demonstration</span>
              </div>
              <div className="flex items-center">
                <Wrench className="text-amber-500 mr-3 h-5 w-5" />
                <span>Maintenance point identification</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button 
                className="bg-amber-500 text-white hover:bg-amber-600"
                onClick={handleLaunch3DViewer}
              >
                <Play className="mr-2 h-4 w-4" />
                Launch 3D Viewer
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Download Specs
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* WebAssembly 3D viewer container */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Box className="text-3xl text-white h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">3D Viewer Ready</h3>
                  <p className="text-slate-400 mb-6">WebAssembly module initialized</p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* 3D Viewer Controls */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" className="bg-white/20 hover:bg-white/30 text-white" title="Rotate">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-white/20 hover:bg-white/30 text-white" title="X-Ray View">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-white/20 hover:bg-white/30 text-white" title="Animate">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-white text-sm flex items-center">
                  <Mouse className="mr-2 h-4 w-4" />
                  Click & drag to rotate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
