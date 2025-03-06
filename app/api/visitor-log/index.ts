import prisma from '@/lib/prisma'
import dayjs from '@/lib/dayjs'

export async function getLastSevenDaysVisits() {
  // 使用 dayjs 获取今天和7天前的日期（本地时间）
  const today = dayjs().startOf('day')
  const sevenDaysAgo = today.subtract(7, 'day')

  const visits = await prisma.visitorLog.findMany({
    where: {
      visitTime: {
        lt: today.toDate(),
        gte: sevenDaysAgo.toDate(),
      },
    },
  })

  // 创建过去7天的日期数组
  const daysArray = Array.from({ length: 7 }, (_, i) => {
    return sevenDaysAgo.add(i, 'day').format('YYYY-MM-DD')
  })

  // 格式化结果
  const formattedResults = daysArray.map((date) => {
    const dayVisits = visits.filter((v) => dayjs(v.visitTime).format('YYYY-MM-DD') === date)
    return {
      date,
      count: dayVisits.length,
    }
  })

  return formattedResults
}

export async function createVisitorLog({ ipAddress, userAgent }) {
  const log = await prisma.visitorLog.create({
    data: {
      ipAddress,
      userAgent,
      visitTime: new Date(),
    },
  })
  return log.id
}

export async function updateExitTime(id: string) {
  const now = new Date()
  await prisma.visitorLog.update({
    where: { id },
    data: {
      exitTime: now,
      sessionDuration: Math.floor(
        (now.getTime() -
          (await prisma.visitorLog.findUnique({ where: { id } }))!.visitTime.getTime()) /
          1000
      ),
    },
  })
}
