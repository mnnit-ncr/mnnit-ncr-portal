import fs from 'node:fs'
import path from 'node:path'

export default {
  load() {
    const dataDir = path.resolve(__dirname, '../../data/alumni')
    return fs.readdirSync(dataDir)
      .filter(file => file.endsWith('.json'))
      .map((file) => {
        const fullPath = path.join(dataDir, file)
        const alumni = JSON.parse(fs.readFileSync(fullPath, 'utf-8'))

        return {
          year: file.replace('.json', ''),
          memberCount: alumni.length
        }
      })
      .sort((a, b) => Number(b.year) - Number(a.year))
  }
}
