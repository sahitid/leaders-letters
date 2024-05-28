import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

const jamsDir = path.join(process.cwd(), 'letters')

export function getLetters() {
  const filenames = fs.readdirSync(jamsDir)

  return filenames.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(jamsDir, filename),
      'utf8'
    )
    const { data, content } = matter(fileContent)

    console.log(data, content);

    return {
      // ...data, // Spread the properties from the data object
      // keywords: parseKeywords(data.keywords),
      // path: '/letter/' + data.slug,
      content
    }
  })
}

function parseKeywords(keywordString) {
  return keywordString.split(',').map(k => k.toLowerCase().trim())
}
