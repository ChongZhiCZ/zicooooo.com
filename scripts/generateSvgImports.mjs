import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 获取当前文件的目录名
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const iconsDirectory = path.join(__dirname, '../public/static/techicons')
const outputFilePath = path.join(__dirname, '../components/tech-icons/iconImports.ts')

const fileNames = fs.readdirSync(iconsDirectory)
const svgFiles = fileNames.filter(file => file.endsWith('.svg'))

const imports = svgFiles.map(file => {
  const name = path.basename(file, '.svg')
  return `import ${name} from 'public/static/techicons/${file}'`
}).join('\n')

const exports = `export const icons = {\n${svgFiles.map(file => {
  const name = path.basename(file, '.svg')
  return `  ${name}:{value:${name}, label:'${name}'},`
}).join('\n')}\n}`

const content = `${imports}\n\n${exports}\n`

fs.writeFileSync(outputFilePath, content, 'utf8')
console.log('SVG imports file generated successfully.')