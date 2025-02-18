"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import { useCentralStore } from "@/Store";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen, toggleSidebar, setIsSidebarOpen } = useCentralStore();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isSidebarOpen ? "overflow-hidden" : ""} h-screen`}
    >
      {/* backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsSidebarOpen(false)}
            className="bg-black/60 absolute top-0 left-0 md:hidden w-full h-screen z-20"
          />
        )}
      </AnimatePresence>

      {/* mobile sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.25 }}
            className="absolute md:hidden z-30 top-0 left-0"
          >
            <Sidebar
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`grid ${
          !isCollapsed ? "grid-cols-[240px_1fr]" : "grid-cols-[100px_1fr]"
        } w-screen overflow-x-hidden`}
      >
        <div className=" md:block">
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </div>

        <div className="w-full overflow-x-auto max-w-full mx-auto">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default AppLayout;
