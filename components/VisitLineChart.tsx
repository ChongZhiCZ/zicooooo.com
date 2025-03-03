'use client'
import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useTheme } from 'next-themes'
import Annotation from 'chartjs-plugin-annotation'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Annotation
)

interface LineChartProps {
  title?: string
  className?: string
}

// 获取图表选项
const getChartOptions = (title: string, isDarkMode: boolean): ChartOptions<'line'> => {
  // Set up initial default values
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: isDarkMode ? '#d1d5db' : '#4b5563',
          align: 'start',
        },
      },
      y: {
        grid: {
          display: true,
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        border: { display: false },

        ticks: {
          color: isDarkMode ? '#d1d5db' : '#4b5563',
          maxTicksLimit: 3,
          padding: 10,
          align: 'center',
        },
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: false, // 鼠标不需要精确相交就能触发
      axis: 'xy', // 同时在 x 和 y 轴方向判断
    },
  }
}

// 图表数据
const chartData: ChartData<'line'> = {
  labels: ['3.1', '3.1', '3.1', '3.1', '3.1', '3.1', '3.1'],
  datasets: [
    {
      label: 'Visitor',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'oklch(0.627 0.194 149.214/0.5)',
      tension: 0.4,
      pointRadius: 4,
      borderWidth: 1,
      borderColor: 'oklch(0.723 0.219 149.579)',
      pointHoverRadius: 6,
    },
  ],
}

const LineChart: React.FC<LineChartProps> = ({ title = '', className = '' }) => {
  const [isClient, setIsClient] = useState(false)
  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setIsClient(true) // Ensure this code runs only on the client
  }, [])

  if (!isClient) return null // Prevent rendering on SSR until after the component mounts on the client

  return (
    <div className={`mx-auto h-35 w-full max-w-4xl ${className}`}>
      <div className="mt-4 flex items-center justify-end space-x-4 pr-13">
        <div className="flex items-center space-x-1">
          <div className="bg-primary-500 h-px w-4"></div>
          <span className="text-xs text-gray-600">Visitor</span>
        </div>
      </div>
      <Line
        options={getChartOptions(title, isDarkMode)}
        data={chartData}
        className="h-full w-full"
      />
    </div>
  )
}

export default LineChart
