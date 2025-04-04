import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export const SignIn = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy credentials
    if (username === "demo" && password === "password123") {
      login(username);
      navigate("/home");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Card className="w-full h-screen overflow-hidden">
      <div className="w-full h-12 [background:linear-gradient(90deg,rgba(72,99,74,1)_7%,rgba(145,201,151,1)_68%)] flex items-center justify-center">
        <div className="[font-family:'Jaro',Helvetica] font-normal text-black text-xl">
          LuxeCrop
        </div>
      </div>

      <CardHeader className="p-4">
        <div className="text-center [font-family:'Jaro',Helvetica] font-normal text-black text-lg">
          Sign In
        </div>
      </CardHeader>

      <CardContent className="p-8 space-y-6 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative flex items-center">
              <Label
                htmlFor="username"
                className="absolute left-2 z-10 [font-family:'Lustria',Helvetica] font-normal text-black text-sm"
              >
                Username:
              </Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 bg-[#91c996] border-none text-sm pl-24 leading-none flex items-center"
              />
            </div>

            <div className="relative flex items-center">
              <Label
                htmlFor="password"
                className="absolute left-2 z-10 [font-family:'Lustria',Helvetica] font-normal text-black text-sm"
              >
                Password:
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 border-none text-sm pl-24 leading-none flex items-center"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div className="flex justify-between items-center">
            <Link
              to="/signup"
              className="[font-family:'Inter',Helvetica] font-medium text-black text-sm"
            >
              Don't have an account? Sign up
            </Link>
            <a
              href="#"
              className="[font-family:'Inter',Helvetica] font-medium text-black text-sm underline"
            >
              Forgot password?
            </a>
          </div>

          <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 [font-family:'Inter',Helvetica] font-medium text-base">
            sign in
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};