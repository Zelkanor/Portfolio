"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabNavigationProps {
  isVisible: boolean;
  activeTab: string;
  onTabChange: (value: string) => void;
  children: React.ReactNode;
}

export function TabNavigation({
  isVisible,
  activeTab,
  onTabChange,
  children,
}: TabNavigationProps) {
  const tabs = [
    { id: "about", label: "About", icon: "•" },
    { id: "experience", label: "Experience", icon: "•" },
    { id: "skills", label: "Skills", icon: "•" },
  ];

  const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);

  return (
    <div
      className={`transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <div className="flex justify-center mb-8 sm:mb-12 px-2 sm:px-0">
          <TabsList
            className="flex rounded-xl sm:rounded-2xl p-1.5 sm:p-2 backdrop-blur-sm border border-gray-700/30 relative overflow-hidden w-full max-w-md sm:max-w-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(20,20,20,0.8) 100%)",
            }}
          >
            {/* Animated background slider */}
            <div
              className="absolute top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 rounded-2xl sm:rounded-3xl transition-all duration-500 ease-out"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                width: `${100 / 3}%`,
                transform: `translateX(${(activeTabIndex - 1) * 100}%)`,
              }}
            />

            {tabs.map((tab, index) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`relative z-10 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 transform hover:scale-105 text-xs sm:text-base ${
                  activeTab === tab.id
                    ? "text-gray-100 shadow-lg"
                    : "text-gray-500 hover:text-gray-300"
                } data-[state=active]:bg-transparent data-[state=active]:text-gray-100`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span
                  className={`text-xs sm:text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "opacity-100 scale-125"
                      : "opacity-60"
                  }`}
                >
                  {tab.icon}
                </span>
                <span className="relative">
                  {tab.label}
                  {/* Underline animation */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                      activeTab === tab.id
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </span>
              </TabsTrigger>
            ))}

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${10 + i * 40}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: "2s",
                  }}
                />
              ))}
            </div>
          </TabsList>
        </div>

        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {children}
        </div>
      </Tabs>
    </div>
  );
}
