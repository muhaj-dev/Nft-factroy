"use client";

import React, { useState } from "react";

const DateSelection: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  return (
    <div
      className="text-primary flex justify-between px-4 py-2 space-x-8"
      style={{
        background:
          "linear-gradient(134deg, rgba(255, 199, 44, 0.16) 0%, rgba(255, 199, 44, 0.00) 100%)",
        border: "2px solid rgba(255, 199, 44, 0.40)",
      }}
    >
      <p>24 hrs</p>
      <p>7 days</p>
      <p>30 days</p>
    </div>
  );
};

export default DateSelection;
