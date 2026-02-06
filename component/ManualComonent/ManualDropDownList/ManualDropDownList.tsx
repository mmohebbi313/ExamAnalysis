// components/Dropdown.tsx
import React, { useState , useEffect, useRef } from 'react';
import { useWindowSize } from '@/component/Tools/UseWindowSize/useWindowSize';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  placeholder?: string;
  onSelect?: (value: string) => void;
  className?: string;
  title?: string;
  contains?: any;
  setForm?: (updater: (prev: Record<string, any>) => Record<string, any>) => void;
  name?: string
}

const ManualDropDownList: React.FC<DropdownProps> = ({
  options,
  placeholder = 'انتخاب کنید',
  onSelect,
  className = '',
  title,
  setForm,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const { width , height} = useWindowSize()
  const dropdownRef = useRef(null)
  const optionListRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // اگر dropdownRef.current وجود دارد و کلیک خارج از آن بوده
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && optionListRef.current && !optionListRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // اضافه کردن event listener هنگام mount
    document.addEventListener('mousedown', handleClickOutside);
    
    // پاک کردن event listener هنگام unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect?.(option.value);
    setForm((prev) => ({
      ...prev,
      [name ?? 'value']: option.value,
    }));
  };

  return (
    <div className={` relative w-full  ${className} `}>
      <div className={` w-full ${ width <= 410 ? 'flex-col ' : 'flex-row items-center'} sm:gap-2 gap-1 h-7.5 sm:h-9 flex`}
      >
      <p className='whitespace-nowrap text-[10px] md:text-[13px]'>
       {title} :
      </p>
      {/* Dropdown Button */}
      <button
        type="button"
        ref={dropdownRef}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 h-7.5 sm:h-9 text-right bg-white
        rounded border border-text-[#01122D] 
        hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
      >
        <span className="text-gray-700 truncate">
          {selected ? selected.label : placeholder}
        </span>
        {/* Arrow Icon */}
        <svg
          className={` w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          } `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      </div>
      {/* Dropdown Menu */}
      {isOpen && (
        <div 
        className="absolute z-10 w-full mt-1 bg-white border border-gray-200 
        rounded-lg transition-all duration-700 shadow-lg overflow-hidden"
        ref={optionListRef}
        >
          <ul className="py-1">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={` w-full text-black  px-4 py-3 hover:bg-gray-100 transition-colors duration-150 ${
                    selected?.value === option.value
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700'
                  } `}
                >
                {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ManualDropDownList;