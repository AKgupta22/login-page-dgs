import DashLayout from "@/components/DashLayout";
import React from "react";
import AppealsLetterContent from "./AppealsLetterContent";

const Appeals = () => {
  return (
    <DashLayout currentIndex={6}>
      <AppealsLetterContent />
    </DashLayout>
  );
};

export default Appeals;
