import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gradientButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        ai: "bg-gradient-to-r from-electric via-cyan-400 to-blue-500 text-white hover:shadow-2xl hover:shadow-electric/50 transform hover:scale-105 transition-all duration-300",
        neural: "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300",
        quantum: "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300",
        ghost: "bg-transparent border-2 border-electric text-electric hover:bg-electric hover:text-white transition-all duration-300 hover:shadow-glow",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "ai",
      size: "default",
    },
  }
);

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean;
  glowEffect?: boolean;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, glowEffect = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(
          gradientButtonVariants({ variant, size, className }),
          glowEffect && "animate-glow-pulse"
        )}
        ref={ref}
        {...props}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        
        {/* Button content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Comp>
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton, gradientButtonVariants };