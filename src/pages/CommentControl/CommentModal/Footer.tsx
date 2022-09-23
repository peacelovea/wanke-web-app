import React from 'react';
import { Button } from 'antd';
import { noop, actionType } from '../config';
import styles from './index.less';

interface IProps {
  onAction: (type: string) => void;
}

function Footer(props: IProps) {
  const { onAction = noop } = props;
  return (
    <div className={styles.footerContainer}>
      <Button type="primary" onClick={() => onAction(actionType.placedTop)}>
        置顶
      </Button>
      <Button onClick={() => onAction(actionType.placedBottom)}>置底</Button>
    </div>
  );
}

export default React.memo(Footer);
