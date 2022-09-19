import path from 'path'
import fs from 'fs-extra'


const src_path = path.resolve(__dirname, '../docs/pages')

const result = {}

async function readFiles(root_path, root_name) {
  const dirs = fs.readdirSync(root_path)
  let list = [] as any
  for (const dir of dirs) {
    const fullPath = path.join(root_path, dir)
    const stats = await fs.statSync(fullPath)
    if (stats.isDirectory()) {
      result[dir] = result[dir] || []
      result[dir].push(...await readFiles(fullPath, dir))
    }
    else {
      const content = fs.readFileSync(fullPath, 'utf-8')
      list.push({ fullPath, title: content.match(/#\s+(.*)$/m)?.[1], path: `/pages/${root_name}/${dir}` })
    }

  }
  return list
}

readFiles(src_path, '/').then(() => {
  let content = '# 目录\r\n\r\n'
  for (const key in result) {
    content += `## 📂 ${key}\r\n\r\n`
    for (const item of result[key]) {
      content += `- [${item.title}](${item.path})\r\n`
    }
  }
  fs.writeFileSync(path.resolve(__dirname, '../docs/index.md'), content)
})

