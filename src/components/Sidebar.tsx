import * as React from "react";
import { Link } from "@tanstack/react-router";
export default function Sidebar() {
    return (
      <aside className="w-64 bg-white p-6 hidden md:block">
        <nav className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-purple-700">
              Dashboard
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-700">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/profile"
                  className="text-gray-600 hover:text-purple-700"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-purple-700"
                >
                  Messages
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/courses"
                  className="text-gray-600 hover:text-purple-700"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/"
                  className="text-gray-600 hover:text-purple-700"
                >
                  Connections
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-purple-700">
              Mentorship
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-purple-700">
                  Find Link Mentor
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-purple-700">
                  My Mentees
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-purple-700">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    );
}