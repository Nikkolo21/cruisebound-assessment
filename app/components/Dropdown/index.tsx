'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { dropdownValues } from '@/app/utils';

export default function Dropdown({ onChange }: { onChange: Function }) {
  const ref = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  function selectValue(value: any) {
    onChange(value);
    setSelectedValue(value);
    setIsOpen(false);
  }

  return (
    <div className='relative cursor-pointer' ref={ref}>
      <button className='border border border-gray w-[140px] rounded-md' onClick={() => setIsOpen(true)}>
        <div className='flex flex-col px-3 pt-1 pb-2 w-full text-ellipsis whitespace-nowrap overflow-hidden font-semibold'>
          <div className='text-left flex justify-between'>
            {dropdownValues[selectedValue].name}
            <FontAwesomeIcon className='mt-2' icon={faCaretDown} color="#797979" />
          </div>
          <div className='text-left text-xs text-darkerGray'>
            <span>{dropdownValues[selectedValue].order === 'asc' ? 'Lowest First': 'Highest First'}</span>
          </div>
        </div>
      </button>
      {
        isOpen && (
          <div className='absolute top-14 bg-white w-max z-10 shadow-lg'>
            {
              dropdownValues.map(elem => (
                <div
                  key={elem.id}
                  className='flex flex-col px-4 py-2 hover:bg-primary hover:text-white'
                  onClick={() => selectValue(elem.value)}
                >
                  <div>{elem.name}</div>
                  <small>{elem.order === 'asc' ? 'Lowest First': 'Highest First'}</small>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}
