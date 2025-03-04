'use client'
import React, { useState } from 'react'
import { icons } from './iconImports'
import { TechType } from './iconImports'

interface TechIconsProps {
  className?: string
  iconClassName?: string
}

export type IconName = keyof typeof icons

export const TechIcon: React.FC<{ name: IconName; className?: string }> = ({ name, className }) => {
  const icon = icons[name]
  if (!icon) return null
  return (
    <icon.value
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      height="1em"
      width="1em"
      className={`group-hover/icon:text-primary-500 h-6 w-6 text-gray-600 transition-colors dark:text-gray-400 ${className}`}
    />
  )
}

export const TechIcons: React.FC<TechIconsProps> = ({ className, iconClassName }) => {
  const [selectedType, setSelectedType] = useState<TechType | null>(null)

  const filteredIcons = Object.entries(icons).filter(
    ([_, icon]) => !selectedType || icon.type === selectedType
  )

  return (
    <>
      <div className="no-scrollbar -mx-1 flex space-x-2 overflow-x-auto px-1 md:justify-center">
        {Object.values(TechType).map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(selectedType === type ? null : type)}
            className={`shrink-0 cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              selectedType === type
                ? 'bg-primary-500/10 text-primary-500'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <div
        className={`mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 ${className}`}
      >
        {filteredIcons.map(([name, icon]) => (
          <div key={name} className="slide-in-from-bottom-4 flex flex-col items-center gap-2">
            <div className="hover:border-primary-500 group/icon flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 transition-colors dark:border-gray-800">
              <TechIcon name={name as IconName} />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">{icon.label}</span>
          </div>
        ))}
      </div>
    </>
  )
}
