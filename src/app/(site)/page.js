"use client";

import AdAgent from "@/components/home-components/adagent"; 
import Banner from "@/components/home-components/banner";
import ClientResultsSection from "@/components/home-components/clientResultsSection";
import FeaturesSection from "@/components/home-components/featuresSection";
import GetStartedCTA from "@/components/home-components/getStartedCTA";
import PaidAds from "@/components/home-components/paidads";
import React from "react";

const Page = () => {
  return (
    <div>
      <Banner />
      <PaidAds />
      <AdAgent />
      <FeaturesSection />
      <ClientResultsSection />
      <GetStartedCTA />
    </div>
  );
};

export default Page;