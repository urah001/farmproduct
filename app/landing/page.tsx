import { HeroSection } from "@/components/ui/hero-section";
import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-green-700">
          Univendor Fresh Farm Produce
        </h1>
        <div>
          <LoginLink className="px-4 py-2 text-green-700 font-semibold hover:underline">
            Login
          </LoginLink>
          <RegisterLink className="ml-4 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
            Sign Up
          </RegisterLink>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center text-center mt-10">
        <HeroSection />
        <h2 className="text-3xl font-bold text-green-800">
          Fresh, Organic & Locally Sourced
        </h2>
        <p className="text-gray-700 mt-4 max-w-md">
          Get the freshest farm produce delivered straight from local farmers to
          your doorstep. Sign up now and start shopping for healthy, organic
          food!
        </p>
        <a
          href="/signup"
          className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg text-lg font-semibold hover:bg-green-800"
        >
          Get Started
        </a>
      </main>
    </div>
  );
};

export default LandingPage;
