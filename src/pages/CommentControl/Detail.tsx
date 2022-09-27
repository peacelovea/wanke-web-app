import { useState, useCallback } from 'react';
import { Descriptions, Card, Button } from 'antd';
import type { DetailType } from './commentControl';
import { getOptimalValue, formatTime } from '@/scripts/utils';
// import Video from '@/components/Player/Video';
import HtmlContent from '@/components/HtmlContent';
// import RichText from '@/components/RichText/v1/RichText';
import CommentModal from './CommentModal';
import styles from './index.less';

interface IProps {
  dataSource: DetailType;
}

function Detail(props: IProps) {
  const {
    dataSource: { author, title, content, object_id, url_token, url, created_at, object_type } = {},
  } = props;
  const [visible, setVisible] = useState(false);
  const onCancel = useCallback(() => {
    setVisible(false);
  }, []);
  return (
    <div className={styles.detailContainer}>
      <Card title="详细信息" bordered={false} className={styles.detailCard}>
        <Descriptions>
          <Descriptions.Item label="ID">{getOptimalValue(object_id)}</Descriptions.Item>
          <Descriptions.Item label="Token">{getOptimalValue(url_token)}</Descriptions.Item>
          <Descriptions.Item label="标题">
            <a href={url} target="_blank">
              {getOptimalValue(title)}
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="作者">{getOptimalValue(author?.full_name)}</Descriptions.Item>
          <Descriptions.Item label="创建时间">
            {getOptimalValue(formatTime(created_at))}
          </Descriptions.Item>
          <Descriptions.Item label="查看评论">
            <Button size="small" onClick={() => setVisible(true)}>
              查看评论
            </Button>
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title="详细内容" bordered={false} className={styles.detailCard}>
        {HtmlContent(content as string)}
        {/* <RichText content={content}  /> */}
        {/* <Video /> */}
        {/* <iframe
          // style={{marginLeft: '25px', verticalAlign: 'middle'}}
          // title="视频"
          src={'https://video.zhihu.com/zticket_review_video/1556237865557655552'}
          width="650"
          height="330"
          frameBorder="0"
          allowFullScreen
          // marginWidth={1}
        /> */}
      </Card>
      {visible ? (
        <CommentModal
          object_id={object_id}
          object_type={object_type}
          visible={visible}
          onCancel={onCancel}
        />
      ) : null}
    </div>
  );
}

export default Detail;
