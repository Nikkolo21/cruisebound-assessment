'use client';
import React from 'react';

export default function Button({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <button className="bg-primary text-white px-2 py-1 rounded-sm text-md">
      {children}
    </button>
  )
}
