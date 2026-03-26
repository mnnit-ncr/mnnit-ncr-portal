const fs = require("fs")
const path = require("path")
const cheerio = require("cheerio")

const input = process.argv[2]

if (!input) {
  console.log("Usage: node convert-members.js life_members_by_batch.htm")
  process.exit(1)
}

const html = fs.readFileSync(input, "utf8")
const $ = cheerio.load(html)

/*
------------------------------------
Prefix extraction
------------------------------------
*/

const PREFIXES = [
  "Er.",
  "Dr.",
  "Prof.",
  "Late",
  "Col.",
  "Capt.",
  "Cdr."
]

function extractPrefix(name) {

  for (const p of PREFIXES) {

    if (name.startsWith(p)) {

      return {
        prefix: p,
        name: name.replace(p, "").trim()
      }

    }

  }

  return {
    prefix: "",
    name
  }

}

/*
------------------------------------
Branch normalization
------------------------------------
*/

const BRANCH_MAP = {
  "Civil": "Civil Engineering",
  "Mechanical": "Mechanical Engineering",
  "Electrical": "Electrical Engineering",
  "Electronics": "Electronics Engineering",
  "Comp. Sc.": "Computer Science & Engineering",
  "Production": "Production Engineering",
  "IT": "Information Technology",
  "Computer Applications": "MCA",
  "Computer Application": "MCA"

}

function normalizeBranch(branch) {

  if (!branch) return ""

  const cleaned = branch.trim()

  return BRANCH_MAP[cleaned] || cleaned

}

/*
------------------------------------
Extract rows
------------------------------------
*/

const members = []

$("table tr").each((i, row) => {

  const cells = $(row).find("td")

  if (cells.length !== 5) return

  const rawName = $(cells[0]).text().trim()
  const batch = $(cells[1]).text().trim()
  const branch = $(cells[2]).text().trim()
  const lmNo = $(cells[3]).text().trim()
  const emailText = $(cells[4]).text().trim()

  if (!rawName || !batch || !lmNo) return

  const { prefix, name } = extractPrefix(rawName)

  const batchYear = parseInt(batch)

  const emails = []

  if (emailText) {

    emailText
      .split(",")
      .map(e => e.trim())
      .filter(Boolean)
      .forEach(e => {

        emails.push({
          type: "personal",
          email: e
        })

      })

  }

  members.push({

    id: Number(lmNo),
    lm_number: Number(lmNo), 
    prefix,
    name,
    batch_year: batchYear,
    branch: normalizeBranch(branch),

    current: {
      role: "",
      company: "",
      location: ""
    },

    links: {},
    emails

  })

})

/*
------------------------------------
Write files year-wise
------------------------------------
*/

const outDir = "../docs/data/alumni"

fs.mkdirSync(outDir, { recursive: true })

for (const member of members) {

  const file = path.join(outDir, `${member.batch_year}.json`)

  let existing = []

  if (fs.existsSync(file)) {

    existing = JSON.parse(
      fs.readFileSync(file, "utf8")
    )

  }

  const exists = existing.some(e => e.id === member.id)

  if (exists) {

    console.log(`• Skipped LM ${member.id} (${member.name})`)
    continue

  }

  existing.push(member)

  fs.writeFileSync(
    file,
    JSON.stringify(existing, null, 2)
  )

  console.log(`✔ Added LM ${member.id} (${member.name})`)

}

console.log("\nDone.")