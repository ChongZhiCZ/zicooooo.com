'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import 'react-calendar-heatmap/dist/styles.css'
import { Tooltip } from 'react-tooltip'
import dayjs from '@/lib/dayjs'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactCalendarHeatmap = dynamic<any>(
  () => import('react-calendar-heatmap'),
  { ssr: false } // 禁用服务器端渲染
)
const GitHubActivityHeatmap = ({ contributions }) => {
  const heatmapData = contributions.weeks.flatMap((week) =>
    week.contributionDays.map((day) => ({
      count: day.contributionCount,
      date: day.date,
    }))
  )
  const today = new Date()
  function shiftDate(date, numDays) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + numDays)
    return newDate
  }

  return (
    <div className="border-0">
      <style jsx>{`
        :global(.react-calendar-heatmap rect) {
          rx: 4px;
        }
        :global(.react-calendar-heatmap text) {
          font-size: 0.55rem;
          fill: #6b7280;
        }
        :global(.react-calendar-heatmap .color-empty) {
          fill: oklch(0.928 0.006 264.531);
        }
        :global(.dark .react-calendar-heatmap .color-empty) {
          fill: oklch(0.928 0.006 264.531 /0.1);
        }
        :global(.react-calendar-heatmap .color-github-1) {
          fill: oklch(0.723 0.219 149.579 / 0.2);
        }
        :global(.react-calendar-heatmap .color-github-2) {
          fill: oklch(0.723 0.219 149.579 / 0.4);
        }
        :global(.react-calendar-heatmap .color-github-3) {
          fill: oklch(0.723 0.219 149.579 / 0.7);
        }
        :global(.react-calendar-heatmap .color-github-4) {
          fill: oklch(0.723 0.219 149.579);
        }
      `}</style>
      <div className="mt-5 rounded-lg border border-neutral-200 p-4 sm:p-6 dark:border-neutral-800">
        <div className="mb-4 flex flex-col space-y-2 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex items-center space-x-2">
            <h3 className="text-base font-semibold text-gray-900 sm:text-lg dark:text-gray-100">
              GitHub Activity
            </h3>
            <div className="flex items-center space-x-1">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </div>
              <span className="text-xs text-gray-500">LIVE</span>
            </div>
          </div>
          <span className="bg-primary-100/10 text-primary-500 dark:bg-primary-900/20 inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium sm:px-3 sm:py-1 sm:text-sm">
            {contributions.totalContributions} contributions this year
          </span>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[750px] overflow-x-auto sm:min-w-full">
            <ReactCalendarHeatmap
              startDate={shiftDate(today, -360)}
              endDate={today}
              values={heatmapData}
              gutterSize={2}
              classForValue={(value) => {
                if (!value.count) {
                  return 'color-empty'
                }
                if (value.count >= 10) return 'color-github-4'
                if (value.count >= 6) return 'color-github-3'
                if (value.count >= 3) return 'color-github-2'
                return 'color-github-1'
              }}
              tooltipDataAttrs={(value) => {
                value ??= 0
                return {
                  'data-tooltip-id': 'github-contribution-tooltip',
                  'data-tooltip-content': `${dayjs(value.date).format('MMM D, YYYY')}: ${value.count} contributions`,
                }
              }}
              showWeekdayLabels={true}
            />
            <Tooltip
              id="github-contribution-tooltip"
              place="top"
              className="!rounded !bg-neutral-800 !px-2 !py-1 !text-xs"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-end space-x-1.5 sm:mt-6 sm:space-x-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">Less</span>
          <div className="flex items-center space-x-1">
            <div className="h-2.5 w-2.5 rounded-full border border-neutral-200 bg-neutral-100 sm:h-3 sm:w-3 dark:border-neutral-700 dark:bg-neutral-800"></div>
            <div className="bg-primary-500/20 h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></div>
            <div className="bg-primary-500/40 h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></div>
            <div className="bg-primary-500/70 h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></div>
            <div className="bg-primary-500 h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></div>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">More</span>
        </div>
      </div>
    </div>
  )
}

export default GitHubActivityHeatmap
