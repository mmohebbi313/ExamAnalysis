'use client'

import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useWindowSize } from '@/component/Tools/UseWindowSize/useWindowSize';

interface Form {
    numberCorrect: number,
    participants: number,
    numberStrong: number,
    numberWeak: number,
    numberCorrectStrong: number,
    numberCorrectWeak: number
}

interface ManualeTextBoxProps {
  type?: string;
  placeholder?: string;
  title?: string;
  name?: string;
  setForm?: React.Dispatch<React.SetStateAction<Form>>;
}

interface ManualTextBoxRef {
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
  search?: string;
}

const ManualeTextBox = forwardRef<ManualTextBoxRef, ManualeTextBoxProps>(
  ({ type = 'text', placeholder, title, setForm, name }, ref) => {
    const [localSearch, setLocalSearch] = useState<string>('');

    // expose به ref
    useImperativeHandle(
      ref,
      () => ({
        setSearch: setLocalSearch,
        search: localSearch,
      }),
      [localSearch, setLocalSearch]
    );

    const changeHandler = (value: any) => {
      setLocalSearch(value);

      if (typeof setForm === 'function') {
        setForm((prev) => ({
          ...prev,
          [name ?? 'value']: value,
        }));
      }
    };

    const { width } = useWindowSize();

    return (
      <div
        id="mainDivManualTextBox"
        className={`${
          width <= 410 ? 'flex-col' : 'flex-row w-full items-center'
        } flex sm:gap-2 gap-1 text-[10px] md:text-[13px]`}
      >
        <p className="whitespace-nowrap">{title} :</p>

        <input
          type={type}
          value={localSearch}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeHandler(e.currentTarget.value)
          }
          placeholder={placeholder ?? 'Enter the amount...'}
          className={` w-full min-w-10 px-2 border border-[#01122D] h-8 sm:h-9 rounded bg-white
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none `}
        />
      </div>
    );
  }
);

ManualeTextBox.displayName = 'ManualeTextBox';

export default ManualeTextBox;