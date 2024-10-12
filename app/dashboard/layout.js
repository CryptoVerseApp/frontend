"use client"
import { useState } from "react";
import MobileNav from "./MobileNav";
import SideNav from "./SideNav";
import UserDash from "./UserDash";
import MobileSide from "./MobileSide";

export default function DashboardLayout({ children }) {

  const [side, setSide] = useState(false)

  return (
    <div className="flex">
      <SideNav />
      {side?<MobileSide setSide={setSide} />:""}
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        <MobileNav setSide={setSide} />
        {children}
      </div>
      <UserDash />
    </div>
  );
}
