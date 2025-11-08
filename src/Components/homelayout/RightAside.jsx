import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./../FindUs"; // ✅ use the same casing for import and component

const RightAside = () => {
  return (
    <div className="space-y-5"> 
      {/* ✅ React Fragment wraps multiple children without adding extra DOM */}
      <SocialLogin />  {/* self-close is fine */}
      <FindUs />
    </div>
  );
};

export default RightAside;
