import React from "react";

function AboutCommitments() {
  return (
    <div className="flex gap-[20px] mb-[60px]">
      <p className="text-[20px] font-[EB_Garamond] w-[50%]">Commitments</p>
      <div className="w-[50%]">
        <p className="text-[20px]  font-[EB_Garamond]">
          <strong> 1. A Neighborhood Table:</strong> We foster strong
          relationships with both patrons, regional producers, and <br /> local
          businesses.
        </p>
        <p className="text-[20px] font-[EB_Garamond]">
          <strong>2. Seasonal Bounty:</strong> We practice responsible sourcing
          and environmental consciousness.
        </p>

        <p className="text-[20px] font-[EB_Garamond]">
          <strong> 3. Unfussy Indulgence</strong> <br /> We serve the highest
          quality food without the pretension.
        </p>
      </div>
    </div>
  );
}

export default AboutCommitments;
