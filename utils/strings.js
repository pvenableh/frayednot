function stripHTML(original) {
  if (!original) return
  else return original.replace(/(<([^>]+)>)/gi, '')
}

function truncateString(str, num) {
  if (!str) return
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

function removeFirst(str) {
  const arr = str.split('. ')
  if (arr.length > 1) {
    return arr[1]
  }
  return str
}

function getFirst(str) {
  const arr = str.split(' ')
  if (arr.length > 1) {
    return arr[0]
  }
  return str
}

function replaceNewlinesWithBreaks(text) {
  if(text) 
  return text.replace(/\n/g, '<br/>')
}
function replaceSpaceWithNewlines(text) {
  if(text) 
  return text.replace(' ', '\n');
}
export { stripHTML, truncateString, removeFirst, replaceNewlinesWithBreaks, replaceSpaceWithNewlines, getFirst }
