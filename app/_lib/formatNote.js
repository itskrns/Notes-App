export function splitContent(text) {
  if (text.split(' ').length < 3) {
    return { title: text.trim(), content: text.trim() };
  } else {
    const title = text.split(' ').slice(0, 3).join(' ').trim();
    const content = text.split(' ').slice(3).join(' ').trim();
    return { title, content };
  }
}
