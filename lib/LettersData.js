import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

const jamsDir = path.join(process.cwd(), 'letters')

export function getLetter(slug) {
  const letters = getLetters();
  return letters.find(letter => letter.slug === slug)
}

export function getLetters() {
  const filenames = fs.readdirSync(jamsDir);

  return filenames.filter(f => f !== 'README.md').map(filename => {
    const fileContent = fs.readFileSync(
      path.join(jamsDir, filename),
      'utf8'
    )
    const { data, content } = matter(fileContent)

    return {
      ...data, // Spread the properties from the data object
      content
    }
  })
}

function parseKeywords(keywordString) {
  return keywordString.split(',').map(k => k.toLowerCase().trim())
}
