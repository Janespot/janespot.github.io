const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

export function getPdfUrl(path) {
  if (isMobile) {
    const absolute = new URL(path, window.location.origin).href;
    return `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(absolute)}`;
  }
  return `${path}#zoom=page-width`;
}
