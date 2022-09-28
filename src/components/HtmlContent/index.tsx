/* eslint-disable no-useless-escape */
const HtmlContent = (content: string) => {
  const filterImg = content?.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, (match, capture) => {
    // capture,返回每个匹配的字符串
    return `<img src=${capture} width=200 />`;
  });

  const filterVideo = filterImg?.replace(
    /<a class=\"video-box\" .*?data-lens-id="(.*?)".*?<\/a>/gi,
    (match, capture) => {
      return `<iframe
        style={marginLeft: '25px', verticalAlign: 'middle'}
        title="视频"
        src='https://v.vzuu.com/zticket_review_video/${capture}'
        width="650"
        height="330"
        frameBorder="0"
        allowFullScreen
      >
      </iframe>`;
    },
  );
  return <div dangerouslySetInnerHTML={{ __html: filterVideo }} />;
};
export default HtmlContent;
