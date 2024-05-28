export function getSingleJams() {
  const directory = path.join(jamsDir, 'singles')
  const filenames = fs.readdirSync(directory)

  return filenames.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(directory, filename, 'en-US.md'),
      'utf8'
    )
    const { data, content } = matter(fileContent)

    return {
      ...data, // Spread the properties from the data object
      keywords: parseKeywords(data.keywords),
      type: 'single',
      path: '/jam/' + data.slug,
      content
    }
  })
}
