import React from 'react'
import { icons } from './iconImports'

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
  return (
    <div
      className={`mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 ${className}`}
    >
      {Object.entries(icons).map(([name, icon]) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <div className="hover:border-primary-500 group/icon flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 transition-colors dark:border-gray-800">
            <TechIcon name={name as IconName} />
          </div>

          <span className="text-sm text-gray-600">{icon.label}</span>
        </div>
      ))}
    </div>
  )
}
