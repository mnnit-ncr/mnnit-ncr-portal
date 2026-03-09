const fs = require("fs")
const cheerio = require("cheerio")

const html = fs.readFileSync("../old-data/index.html", "utf8")

const $ = cheerio.load(html)

const events = []

const months = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12"
}

$("a").each((i, el) => {
  const text = $(el).text().trim()

  if (!text.includes("-")) return
  if (!text.match(/\d{2}-[A-Za-z]{3}-\d{2}/)) return

  const url = $(el).attr("href")

  const parts = text.split("-")

  const type = parts[0] === "Family" ? "family" : "individual"

  const day = parts[parts.length - 3]
  const month = parts[parts.length - 2]
  const year = parts[parts.length - 1]

  const locationParts = parts.slice(1, parts.length - 3)
  const location = locationParts.join(" ")

  const fullYear = Number(year) > 50 ? `19${year}` : `20${year}`

  const date = `${fullYear}-${months[month]}-${day}`

  events.push({
    id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    title: type === "family"
      ? "Annual Family Get-Together"
      : "Individual Alumni Meet",
    event_type: type,
    date,
    location,
    description:
      type === "family"
        ? "Annual family reunion of MNNIT alumni in the NCR chapter."
        : "Networking meetup for alumni members in Delhi NCR.",
    image: `https://picsum.photos/800/600?random=${i + 1}`,
    gallery_link: url
  })
})

events.sort((a, b) => new Date(b.date) - new Date(a.date))

fs.writeFileSync(
  "./past-events.json",
  JSON.stringify(events, null, 2)
)

console.log("Extracted", events.length, "events")