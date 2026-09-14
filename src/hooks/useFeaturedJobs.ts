import { useState } from "react";
import { jobs } from "../ui/data/safeJobConnectPageData";

const INITIAL_VISIBLE = 6;

export const useFeaturedJobs = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleJobs = showAll ? jobs : jobs.slice(0, INITIAL_VISIBLE);

  const toggleShowAll = () => setShowAll((prev) => !prev);

  return {
    showAll,
    visibleJobs,
    totalJobs: jobs.length,
    initialVisible: INITIAL_VISIBLE,
    toggleShowAll,
  };
};