const HtmlContent = (content: string) => {
  const makeContent = content?.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, (match, capture) => {
    // capture,返回每个匹配的字符串
    return `<img src=${capture} width=200 />`;
  });
  return <div dangerouslySetInnerHTML={{ __html: makeContent }} />;
};
export default HtmlContent;
