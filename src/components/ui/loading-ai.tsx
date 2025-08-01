import { cn } from "@/lib/utils";

interface LoadingAIProps {
  className?: string;
  text?: string;
}

export const LoadingAI = ({ className, text = "Procesando..." }: LoadingAIProps) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-electric rounded-full animate-pulse animation-delay-0"></div>
        <div className="w-2 h-2 bg-electric rounded-full animate-pulse animation-delay-200"></div>
        <div className="w-2 h-2 bg-electric rounded-full animate-pulse animation-delay-400"></div>
      </div>
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
};

export const NeuralNetwork = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <svg className="w-full h-full absolute inset-0 opacity-10" viewBox="0 0 400 300">
        {/* Neural Network Visualization */}
        <g>
          {/* Neurons */}
          <circle cx="50" cy="75" r="4" fill="currentColor" className="text-electric animate-pulse">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="150" r="4" fill="currentColor" className="text-electric animate-pulse">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="225" r="4" fill="currentColor" className="text-electric animate-pulse">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="150" cy="100" r="4" fill="currentColor" className="text-electric animate-pulse">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="200" r="4" fill="currentColor" className="text-electric animate-pulse">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="250" cy="125" r="4" fill="currentColor" className="text-electric animate-pulse">
            <animate attributeName="opacity" values="0.9;1;0.9" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="175" r="4" fill="currentColor" className="text-electric animate-pulse">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="350" cy="150" r="4" fill="currentColor" className="text-electric animate-pulse">
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Connections */}
          <line x1="50" y1="75" x2="150" y2="100" stroke="currentColor" strokeWidth="1" className="text-electric/30">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="50" y1="150" x2="150" y2="100" stroke="currentColor" strokeWidth="1" className="text-electric/30">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
          </line>
          <line x1="50" y1="225" x2="150" y2="200" stroke="currentColor" strokeWidth="1" className="text-electric/30">
            <animate attributeName="opacity" values="0.1;0.9;0.1" dur="2.8s" repeatCount="indefinite" />
          </line>
          
          <line x1="150" y1="100" x2="250" y2="125" stroke="currentColor" strokeWidth="1" className="text-electric/30">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.2s" repeatCount="indefinite" />
          </line>
          <line x1="150" y1="200" x2="250" y2="175" stroke="currentColor" strokeWidth="1" className="text-electric/30">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.2s" repeatCount="indefinite" />
          </line>
          
          <line x1="250" y1="125" x2="350" y2="150" stroke="currentColor" strokeWidth="1" className="text-electric/30">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
          </line>
          <line x1="250" y1="175" x2="350" y2="150" stroke="currentColor" strokeWidth="1" className="text-electric/30">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.6s" repeatCount="indefinite" />
          </line>
        </g>
      </svg>
    </div>
  );
};