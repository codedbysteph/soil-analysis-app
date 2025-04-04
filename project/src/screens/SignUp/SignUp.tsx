import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Link } from "react-router-dom";

export const SignUp = (): JSX.Element => {
  return (
    <Card className="w-full h-screen overflow-hidden">
      {/* Header with gradient */}
      <div className="w-full h-12 [background:linear-gradient(90deg,rgba(72,99,74,1)_7%,rgba(145,201,151,1)_68%)] flex items-center justify-center">
        <div className="[font-family:'Jaro',Helvetica] font-normal text-black text-xl">
          LuxeCrop
        </div>
      </div>

      <CardHeader className="p-4">
        <div className="text-center [font-family:'Jaro',Helvetica] font-normal text-black text-lg">
          Sign Up
        </div>
      </CardHeader>

      <CardContent className="p-8 space-y-6 max-w-md mx-auto">
        <div className="space-y-4">
          <div className="relative flex items-center">
            <Label
              htmlFor="email"
              className="absolute left-2 z-10 [font-family:'Lustria',Helvetica] font-normal text-black text-sm"
            >
              Email:
            </Label>
            <Input
              id="email"
              type="email"
              className="h-12 bg-[#91c996] border-none text-sm pl-24 leading-none flex items-center"
            />
          </div>

          <div className="relative flex items-center">
            <Label
              htmlFor="username"
              className="absolute left-2 z-10 [font-family:'Lustria',Helvetica] font-normal text-black text-sm"
            >
              Username:
            </Label>
            <Input
              id="username"
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
              className="h-12 border-none text-sm pl-24 leading-none flex items-center"
            />
          </div>

          <div className="relative flex items-center">
            <Label
              htmlFor="confirmPassword"
              className="absolute left-2 z-10 [font-family:'Lustria',Helvetica] font-normal text-black text-sm"
            >
              Confirm:
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              className="h-12 border-none text-sm pl-24 leading-none flex items-center"
            />
          </div>
        </div>

        <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 [font-family:'Inter',Helvetica] font-medium text-base">
          sign up
        </Button>

        <div className="text-center">
          <Link
            to="/signin"
            className="[font-family:'Inter',Helvetica] font-medium text-black text-sm"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};