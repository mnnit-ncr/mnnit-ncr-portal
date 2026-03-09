import fs from 'node:fs'
import path from 'node:path'

export default {
  load() {

    const dataDir = path.resolve(__dirname, '../../data/alumni')

    const files = fs.readdirSync(dataDir)
      .filter(file => file.endsWith('.json'))

    const alumni = []

    for (const file of files) {

      const jsonData = JSON.parse(
        fs.readFileSync(path.join(dataDir, file), 'utf-8')
      )

      alumni.push(...jsonData)

    }

    return alumni.sort(
      (a, b) => a.lm_number - b.lm_number
    )

  }
}