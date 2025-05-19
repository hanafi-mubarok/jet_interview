'use client';
import React, { createContext, useContext, useState } from 'react';

interface SidebarContextType {
  openSidebar: () => void;
  closeSidebar: () => void;
  isSidebarOpen: boolean;
}

const SidebarContext = createContext<SidebarContextType>({
  openSidebar: () => {},
  closeSidebar: () => {},
  isSidebarOpen: false,
});

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <SidebarContext.Provider value={{ openSidebar, closeSidebar, isSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);