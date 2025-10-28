import { useState } from "react";

export function useTabs(initial = 0) {
  const [activeIndex, setActiveIndex] = useState(initial);

  const selectTab = (index) => setActiveIndex(index);

  return { activeIndex, selectTab };
}