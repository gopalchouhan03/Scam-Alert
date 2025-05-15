import React from "react";
import Hero from "./Hero";
import LiveAlertBar from "./LiveAlertBar";
import ScamListings from "./ScamListings";
import PaginationComponent from "./PaginationComponent";
import TrustElements from "./TrustElements";


const LatestScam = () => (
  <>
    <Hero/>
    <LiveAlertBar />
    <ScamListings />
    <PaginationComponent />
    <TrustElements />
  </>
);

export default LatestScam;
