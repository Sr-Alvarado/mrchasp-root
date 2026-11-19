const icons: Record<string, string> = {
  github: 'simple-icons:github',
  instagram: 'simple-icons:instagram',
  linkedin: 'simple-icons:linkedin',
  bluesky: 'simple-icons:bluesky',
  x: 'simple-icons:x',
  email: 'ph:envelope-simple-light',
}

export const channelIcon = (platform: string | null) =>
  icons[platform?.toLowerCase() ?? ''] ?? 'ph:link-light'
