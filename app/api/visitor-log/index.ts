import prisma from '@/lib/prisma'

export async function getLastSevenDaysVisits() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const sevenDaysAgo = new Date(today)
  sevenDaysAgo.setDate(today.getDate() - 7)

  const visits = await prisma.visitorLog.groupBy({
    by: ['visitTime'],
    _count: {
      id: true,
    },
    where: {
      visitTime: {
        lt: today,
        gte: sevenDaysAgo,
      },
    },
  })

  // 创建过去7天的日期数组
  const daysArray = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today)
    date.setDate(date.getDate() - (7 - i))
    return date.toISOString().split('T')[0]
  })

  // 格式化结果
  const formattedResults = daysArray.map((date) => {
    const dayVisits = visits.filter((v) => v.visitTime.toISOString().split('T')[0] === date)
    return {
      date,
      count: dayVisits.length > 0 ? dayVisits[0]._count.id : 0,
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
