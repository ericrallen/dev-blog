export default ({ key, prefix = '', separator = '-' }) => {
  const replaceRegex = /\W/g;

  return `${prefix}${separator}${key.toLowerCase().replace(replaceRegex, separator)}`;
}
