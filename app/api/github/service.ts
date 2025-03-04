export async function getGitHubContributions() {
  const query = `
    query {
      viewer {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 3600, // 1小时缓存
    },
  })

  const { data } = await response.json()
  return {
    totalContributions: data.viewer.contributionsCollection.contributionCalendar.totalContributions,
    weeks: data.viewer.contributionsCollection.contributionCalendar.weeks,
  }
}
