'use client';
import React, { useEffect, useState } from 'react';

type TabProps = Readonly<{
  onTabChange: (value: string) => void;
  tabs: Array<{ label: string; value: string; id: number }>;
  defaultTab?: string;
}>;

const Tabs = (props: TabProps) => {
  const { tabs, onTabChange, defaultTab = '' } = props;

  const [active, setActive] = useState(defaultTab);

  useEffect(() => {
    onTabChange(active);
  }, [active]);

  const handleClickTab = (value: string) => {
    setActive((prev) => {
      if (prev === value) return '';
      return value;
    });
  };

  return (
    <div className="no-scrollbar my-4 flex w-full space-x-3 overflow-x-scroll">
      {tabs.map((tab) => {
        return (
          <div
            key={tab.value}
            onClick={() => handleClickTab(tab.value)}
            className={`h-18 w-fit cursor-pointer whitespace-nowrap rounded-lg px-3 py-2 font-semibold transition-all duration-200 ${tab.value === active ? 'bg-orange text-white' : 'bg-gray-100 text-slate-500'}`}
          >
            {tab.label}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
