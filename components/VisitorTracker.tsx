'use client'
import { useEffect, useState } from 'react'

export default function VisitorTracker() {
  const [visitorId, setVisitorId] = useState<string>('')

  // 创建访客记录的 useEffect
  useEffect(() => {
    const createVisitor = async () => {
      try {
        const response = await fetch('/api/visitor-log/create', {
          method: 'POST',
        })
        const data = await response.json()
        setVisitorId(data.id)
      } catch (error) {
        console.error('创建访客记录失败:', error)
      }
    }

    createVisitor()
  }, []) // 仅在组件挂载时执行一次

  // 处理访客追踪的 useEffect
  useEffect(() => {
    if (!visitorId) return // 如果没有 visitorId，不执行后续逻辑

    // 处理页面隐藏和卸载
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        navigator.sendBeacon('/api/visitor-log/update-exit-time', JSON.stringify({ id: visitorId }))
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [visitorId]) // 当 visitorId 变化时重新执行

  return null
}
