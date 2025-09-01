import { Test } from "../components/Test";
import { HeroSection } from "../components/Hero";
import { HomeCards } from "../components/HomeCards";
import { JobsListing } from "../components/JobsListing";
import { Navbar } from "../components/Navbar";
import { ViewAllJobs } from "../components/ViewAllJobs";

export const HomePage = () => {
  return (
    <>
      <HeroSection
        title="Become a React Dev"
        subTitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobsListing isHome={true} />
      <ViewAllJobs />
    </>
  );
};
