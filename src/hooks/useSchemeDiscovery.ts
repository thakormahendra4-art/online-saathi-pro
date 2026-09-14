import { useState } from "react";
import { schemeCategories } from "../ui/data/governmentSchemesPageData";
import type { Scope } from "../ui/data/governmentSchemesPageData";

export const useSchemeDiscovery = () => {
  const [activeTab, setActiveTab] = useState<Scope>("all");

  const filtered = schemeCategories.filter(
    (cat) => activeTab === "all" || cat.scope === activeTab,
  );

  return { activeTab, setActiveTab, filtered };
};