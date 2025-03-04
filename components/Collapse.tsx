'use client'
import { useState } from 'react'

interface CollapsibleProps {
  title: string
  description?: string
  children: React.ReactNode
}

const Collapsible = ({ title, description, children }: CollapsibleProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      <button
        className="flex w-full cursor-pointer items-center justify-between pb-4 text-left"
        onClick={toggleCollapse}
      >
        <div className="space-y-1">
          <h3 className="text-lg font-medium">{title}</h3>
          {description && <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>}
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800">
          <svg
            className={`h-4 w-4 transform text-gray-600 transition-transform duration-200 dark:text-gray-400 ${
              isCollapsed ? '' : 'rotate-180'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </button>
      <div
        className={`mt-6 overflow-hidden transition-all duration-200 ease-in-out ${
          isCollapsed ? 'invisible max-h-0' : 'visible max-h-[1000px]'
        }`}
      >
        {children}
      </div>
    </>
  )
}

export default Collapsible
