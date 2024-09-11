import React from 'react';
import { SearchIcon } from '../icon/SearchIcon';

interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  return (
    <div
      className={`lg:max-w-15rem flex w-full max-w-md items-center overflow-hidden rounded-md border border-gray-300 bg-white shadow-md`}
    >
      <SearchIcon className={`ml-2 h-[22px] w-[22px] md:ml-3 md:h-[24px] md:w-[24px]`} />
      <input
        type="search"
        className="flex-1 rounded-md py-2 pl-2 pr-4 focus:outline-none"
        placeholder={placeholder ?? ''}
      />
    </div>
  );
};
