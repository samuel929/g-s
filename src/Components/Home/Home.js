import React from "react";
import BlockElements from "./BlockElements/BlockElemts";
import Markets from "./Markets/Our-Markets";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import Header from "./Header/Header";
export default function Home() {
  return (
    <div>
      <Header />
      <BlockElements />
      <Markets />
      <FeaturedProjects />
    </div>
  );
}
