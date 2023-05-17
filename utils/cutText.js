module.exports = (content, maxLength) => {
  if (typeof content !== 'string' || typeof maxLength !== 'number') return 'Error';
  if (content.length < 1 || maxLength < 1) return 'Error';
  if (content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
