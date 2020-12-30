export function titleEncoder(title: string): string {
  if (title.length) {
    return encodeURIComponent(
      title
        .toLowerCase()
        .replace(/&/g, 'n')
        .replace(/\s/g, '-')
        .replace(/[^a-z0-9-]/g, '')
    )
  }

  return ''
}
