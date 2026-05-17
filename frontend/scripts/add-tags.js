import fs from 'fs'

const tagMap = {
  1: ["body"],
  3: ["phone", "ev"],
  6: ["body", "daily"],
  7: ["body"],
  8: ["body"],
  9: ["daily"],
  11: ["body", "daily"],
  12: ["body"],
  13: ["ev", "daily"],
  14: ["phone", "solar", "daily"],
  15: ["body"],
  16: ["body"],
  17: ["body", "daily"],
  19: ["body"],
  20: ["body"],
  22: ["ev"],
  24: ["daily"],
  25: ["ev"],
  26: ["body", "daily"],
  27: ["phone", "ev"],
  28: ["ev"],
  29: ["ev", "daily"],
  30: ["body", "daily"],
  31: ["solar"],
  47: ["precious", "phone"],
  49: ["phone", "solar"],
  50: ["phone", "daily"],
  52: ["solar"],
  53: ["body"],
  74: ["daily"],
  78: ["precious", "ev"],
  79: ["precious", "phone"],
  80: ["daily"],
  82: ["daily"],
  88: ["radioactive"],
  90: ["radioactive"],
  92: ["radioactive"],
  94: ["radioactive"],
  95: ["radioactive"],
}

const elements = JSON.parse(fs.readFileSync('./src/data/elements.json', 'utf-8'))

elements.forEach(el => {
  el.tags = tagMap[el.number] || []
})

fs.writeFileSync('./src/data/elements.json', JSON.stringify(elements, null, 2))
console.log('✓ Tags added successfully to', elements.length, 'elements')
