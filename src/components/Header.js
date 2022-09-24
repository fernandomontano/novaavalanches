import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div className="mb-5 py-4 px-0 flex justify-between border-b-2 border-gray-600 align-center items-center">
      <div className="font-bold text-2xl cursor-pointer">
        <Link to="/"> NovaAvalanches</Link>
      </div>
      <div className="text-xl">[Logo]</div>
      <Outlet />
    </div>
  );
}
