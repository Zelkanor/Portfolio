"use client";

import { TabsContent } from "@/components/ui/tabs";

import { SkillsOrbs } from "./SkillsOrbs";

export function SkillsTabContent() {
  return (
    <TabsContent value="skills" className="mt-0">
      <SkillsOrbs />
    </TabsContent>
  );
}
