const mediaBaseUrl = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.replace(/\/$/, "");

export function mediaPath(path: string) {
  if (!mediaBaseUrl || /^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedPath = path.replace(/^\/images\//, "").replace(/^\//, "");
  return `${mediaBaseUrl}/${normalizedPath}`;
}

export function absoluteMediaUrl(path: string, siteUrl: string) {
  return new URL(mediaPath(path), siteUrl).toString();
}
