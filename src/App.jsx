import { Github } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Vite + React + Tailwind</h1>
      <div className="flex items-center gap-2 text-gray-700">
        <Github size={24} />
        <span>Built with modern tools</span>
      </div>
    </div>
  );
}

export default App;
