
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here when needed
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Enter your email below to login to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label 
                  htmlFor="password" 
                  className="text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:text-primary/90 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:text-primary/90 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right side - Decorative Pattern */}
      <div className="hidden lg:block lg:w-1/2 bg-[#EEF1FF] relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-lg opacity-10 text-primary"></div>
        <div 
          className="absolute inset-0 bg-[url('lovable-uploads/47398b2e-5c28-434c-ab72-b57c81ada8bd.png')] 
                     bg-no-repeat bg-center bg-contain opacity-50"
        ></div>
      </div>
    </div>
  );
};

export default Login;
