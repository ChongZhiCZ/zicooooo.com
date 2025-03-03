'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import 'react-calendar-heatmap/dist/styles.css'
import { Tooltip } from 'react-tooltip'
import dayjs from '@/lib/dayjs'
const ReactCalendarHeatmap = dynamic<any>(
  () => import('react-calendar-heatmap'),
  { ssr: false } // 禁用服务器端渲染
)
const GitHubActivityHeatmap = ({ contributions }) => {
  const data = {
    totalContributions: 427,
    weeks: [
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-03-03' },
          { contributionCount: 2, date: '2024-03-04' },
          { contributionCount: 0, date: '2024-03-05' },
          { contributionCount: 0, date: '2024-03-06' },
          { contributionCount: 0, date: '2024-03-07' },
          { contributionCount: 0, date: '2024-03-08' },
          { contributionCount: 0, date: '2024-03-09' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-03-10' },
          { contributionCount: 0, date: '2024-03-11' },
          { contributionCount: 0, date: '2024-03-12' },
          { contributionCount: 0, date: '2024-03-13' },
          { contributionCount: 0, date: '2024-03-14' },
          { contributionCount: 0, date: '2024-03-15' },
          { contributionCount: 4, date: '2024-03-16' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-03-17' },
          { contributionCount: 6, date: '2024-03-18' },
          { contributionCount: 5, date: '2024-03-19' },
          { contributionCount: 0, date: '2024-03-20' },
          { contributionCount: 0, date: '2024-03-21' },
          { contributionCount: 0, date: '2024-03-22' },
          { contributionCount: 10, date: '2024-03-23' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 4, date: '2024-03-24' },
          { contributionCount: 5, date: '2024-03-25' },
          { contributionCount: 4, date: '2024-03-26' },
          { contributionCount: 7, date: '2024-03-27' },
          { contributionCount: 6, date: '2024-03-28' },
          { contributionCount: 7, date: '2024-03-29' },
          { contributionCount: 16, date: '2024-03-30' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 2, date: '2024-03-31' },
          { contributionCount: 1, date: '2024-04-01' },
          { contributionCount: 1, date: '2024-04-02' },
          { contributionCount: 2, date: '2024-04-03' },
          { contributionCount: 15, date: '2024-04-04' },
          { contributionCount: 4, date: '2024-04-05' },
          { contributionCount: 2, date: '2024-04-06' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 1, date: '2024-04-07' },
          { contributionCount: 3, date: '2024-04-08' },
          { contributionCount: 0, date: '2024-04-09' },
          { contributionCount: 1, date: '2024-04-10' },
          { contributionCount: 0, date: '2024-04-11' },
          { contributionCount: 1, date: '2024-04-12' },
          { contributionCount: 1, date: '2024-04-13' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-04-14' },
          { contributionCount: 2, date: '2024-04-15' },
          { contributionCount: 0, date: '2024-04-16' },
          { contributionCount: 0, date: '2024-04-17' },
          { contributionCount: 0, date: '2024-04-18' },
          { contributionCount: 1, date: '2024-04-19' },
          { contributionCount: 0, date: '2024-04-20' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-04-21' },
          { contributionCount: 0, date: '2024-04-22' },
          { contributionCount: 0, date: '2024-04-23' },
          { contributionCount: 2, date: '2024-04-24' },
          { contributionCount: 1, date: '2024-04-25' },
          { contributionCount: 5, date: '2024-04-26' },
          { contributionCount: 11, date: '2024-04-27' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 2, date: '2024-04-28' },
          { contributionCount: 4, date: '2024-04-29' },
          { contributionCount: 0, date: '2024-04-30' },
          { contributionCount: 0, date: '2024-05-01' },
          { contributionCount: 0, date: '2024-05-02' },
          { contributionCount: 0, date: '2024-05-03' },
          { contributionCount: 0, date: '2024-05-04' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-05-05' },
          { contributionCount: 6, date: '2024-05-06' },
          { contributionCount: 0, date: '2024-05-07' },
          { contributionCount: 0, date: '2024-05-08' },
          { contributionCount: 0, date: '2024-05-09' },
          { contributionCount: 0, date: '2024-05-10' },
          { contributionCount: 0, date: '2024-05-11' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-05-12' },
          { contributionCount: 0, date: '2024-05-13' },
          { contributionCount: 0, date: '2024-05-14' },
          { contributionCount: 0, date: '2024-05-15' },
          { contributionCount: 0, date: '2024-05-16' },
          { contributionCount: 0, date: '2024-05-17' },
          { contributionCount: 8, date: '2024-05-18' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-05-19' },
          { contributionCount: 0, date: '2024-05-20' },
          { contributionCount: 0, date: '2024-05-21' },
          { contributionCount: 1, date: '2024-05-22' },
          { contributionCount: 0, date: '2024-05-23' },
          { contributionCount: 0, date: '2024-05-24' },
          { contributionCount: 0, date: '2024-05-25' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-05-26' },
          { contributionCount: 0, date: '2024-05-27' },
          { contributionCount: 3, date: '2024-05-28' },
          { contributionCount: 0, date: '2024-05-29' },
          { contributionCount: 1, date: '2024-05-30' },
          { contributionCount: 0, date: '2024-05-31' },
          { contributionCount: 0, date: '2024-06-01' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-06-02' },
          { contributionCount: 0, date: '2024-06-03' },
          { contributionCount: 3, date: '2024-06-04' },
          { contributionCount: 2, date: '2024-06-05' },
          { contributionCount: 1, date: '2024-06-06' },
          { contributionCount: 0, date: '2024-06-07' },
          { contributionCount: 0, date: '2024-06-08' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-06-09' },
          { contributionCount: 0, date: '2024-06-10' },
          { contributionCount: 0, date: '2024-06-11' },
          { contributionCount: 0, date: '2024-06-12' },
          { contributionCount: 0, date: '2024-06-13' },
          { contributionCount: 0, date: '2024-06-14' },
          { contributionCount: 0, date: '2024-06-15' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-06-16' },
          { contributionCount: 0, date: '2024-06-17' },
          { contributionCount: 0, date: '2024-06-18' },
          { contributionCount: 0, date: '2024-06-19' },
          { contributionCount: 0, date: '2024-06-20' },
          { contributionCount: 0, date: '2024-06-21' },
          { contributionCount: 0, date: '2024-06-22' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-06-23' },
          { contributionCount: 0, date: '2024-06-24' },
          { contributionCount: 0, date: '2024-06-25' },
          { contributionCount: 0, date: '2024-06-26' },
          { contributionCount: 0, date: '2024-06-27' },
          { contributionCount: 0, date: '2024-06-28' },
          { contributionCount: 0, date: '2024-06-29' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-06-30' },
          { contributionCount: 0, date: '2024-07-01' },
          { contributionCount: 0, date: '2024-07-02' },
          { contributionCount: 0, date: '2024-07-03' },
          { contributionCount: 3, date: '2024-07-04' },
          { contributionCount: 1, date: '2024-07-05' },
          { contributionCount: 0, date: '2024-07-06' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 0, date: '2024-07-07' },
          { contributionCount: 0, date: '2024-07-08' },
          { contributionCount: 11, date: '2024-07-09' },
          { contributionCount: 4, date: '2024-07-10' },
          { contributionCount: 1, date: '2024-07-11' },
          { contributionCount: 0, date: '2024-07-12' },
          { contributionCount: 6, date: '2024-07-13' },
        ],
      },
    ],
  }
  //   const heatmapData = data.weeks.flatMap((week) =>
  //     week.contributionDays.map((day) => ({
  //       count: day.contributionCount,
  //       date: day.date,
  //     }))
  //   )
  const today = new Date()
  function shiftDate(date, numDays) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + numDays)
    return newDate
  }

  function getRange(count) {
    return Array.from({ length: count }, (_, i) => i)
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const randomValues = getRange(365).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    }
  })
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
        :global(.react-calendar-heatmap .color-github-1) {
          fill: #22c55e33;
        }
        :global(.react-calendar-heatmap .color-github-2) {
          fill: #22c55e66;
        }
        :global(.react-calendar-heatmap .color-github-3) {
          fill: #22c55ee6;
        }
        :global(.react-calendar-heatmap .color-github-4) {
          fill: #22c55e;
        }
      `}</style>
      <div className="mt-5 rounded-lg border border-gray-200 p-4 sm:p-6 dark:border-gray-800">
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
            427 contributions this year
          </span>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[750px] overflow-x-auto sm:min-w-full">
            <ReactCalendarHeatmap
              startDate={shiftDate(today, -360)}
              endDate={today}
              values={randomValues}
              gutterSize={2}
              classForValue={(value) => {
                if (!value) {
                  return 'color-empty'
                }
                return `color-github-${value.count}`
              }}
              tooltipDataAttrs={(value) => {
                value ?? 0
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
              className="!rounded !bg-gray-800 !px-2 !py-1 !text-xs"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-end space-x-1.5 sm:mt-6 sm:space-x-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">Less</span>
          <div className="flex items-center space-x-1">
            <div className="h-2.5 w-2.5 rounded-full border border-gray-200 bg-gray-100 sm:h-3 sm:w-3 dark:border-gray-700 dark:bg-gray-800"></div>
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
