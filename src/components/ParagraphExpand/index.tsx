import { Typography } from 'antd';
import type { ReactNode } from 'react';
import { useState } from 'react';
import styles from './index.less';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import HtmlContent from '../HtmlContent';

interface ParagraphExpandProps {
  content: string | ReactNode;
  rows?: number;
  tooltip?: boolean;
  width?: number | string;
  showHtml?: boolean;
}
const ParagraphExpand = ({
  content,
  rows = 3,
  tooltip = false,
  width = 'auto',
  showHtml = false,
}: ParagraphExpandProps) => {
  const { Paragraph } = Typography;
  const [expand, setExpand] = useState(false);
  const [counter, setCounter] = useState(0);
  const count = !expand ? counter + 0 : counter + 1;
  const handleExpand = () => {
    setExpand(true);
    setCounter(count);
  };
  const handleClose = () => {
    setExpand(false);
    setCounter(count);
  };

  const renderContent = () => {
    if (!showHtml && !expand) {
      return content;
    }
    return HtmlContent(content as string);
  };
  return (
    <div className={styles.paragraphExpandContainer} style={{ width }}>
      <div key={counter}>
        <Paragraph
          ellipsis={{
            rows,
            onExpand: handleExpand,
            tooltip,
            expandable: true,
            symbol: (
              <span>
                展开
                <DownOutlined />
              </span>
            ),
          }}
        >
          {renderContent()}
        </Paragraph>
      </div>
      {expand && (
        <a onClick={handleClose}>
          收起
          <UpOutlined />
        </a>
      )}
    </div>
  );
};

export default ParagraphExpand;
