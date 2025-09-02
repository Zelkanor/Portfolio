"use client";

import { TabsContent } from "@/components/ui/tabs";

import { ProfileSection } from "./ProfileSection";
import { StorySection } from "./StorySection";

export function AboutTabContent() {
  return (
    <TabsContent value="about" className="mt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center animate-fade-in">
        <ProfileSection />
        <StorySection />
      </div>
    </TabsContent>
  );
}
