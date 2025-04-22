
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from 'react-router-dom';
import SocialLoginButton from '@/components/ui-custom/social-login-button';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here when needed
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left side - Mountain Graphic */}
      <div className="hidden lg:block lg:w-1/2 bg-[#EEF1FF] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#009dff]/80 to-[#009dff]/60"></div>
          <img 
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
            alt="Mountain landscape with river" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-8 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 shadow-lg">
            <h2 className="text-3xl font-bold text-white drop-shadow-md">Welcome Back</h2>
            <p className="text-xl text-white drop-shadow-md">Start your learning journey today</p>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-6">
            <div className="w-full flex justify-center bg-white p-4 rounded-lg shadow-sm">
              <img
                src="/lovable-uploads/everest-tutoring-logo.png"
                alt="Everest Tutoring"
                className="h-20 w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground mt-2">
                Enter your email below to login to your account
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <SocialLoginButton provider="google" variant="colored" />
            <SocialLoginButton provider="facebook" variant="colored" />
            <SocialLoginButton provider="apple" variant="colored" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
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
                  className="text-sm text-[#009dff] hover:text-[#009dff]/90 hover:underline"
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

            <Button type="submit" className="w-full bg-[#009dff] hover:bg-[#009dff]/90">
              Sign in
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#009dff] hover:text-[#009dff]/90 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
