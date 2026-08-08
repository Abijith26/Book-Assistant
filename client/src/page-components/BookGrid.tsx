import React from "react";
import ExpandableCards from "@/components/ui/smoothui/expandable-cards";
import { sampleBooks } from "../lib/constants";

function BookGrid() {
  return <ExpandableCards cards={sampleBooks} />;
}

export default BookGrid;
