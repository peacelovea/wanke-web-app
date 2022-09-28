import React, { useMemo } from 'react';
import { Button, Menu, Dropdown } from 'antd';
import { useRequest } from 'ahooks';
import { noop, actionType } from '../config';
import { getDropdownOptions } from '@/services/commentControl';
import styles from './index.less';

interface IProps {
  onAction: (key: number, type: string) => void;
}

function Footer(props: IProps) {
  const { onAction = noop } = props;
  const { data: { data = {} } = {} } = useRequest(getDropdownOptions);
  const menu = useMemo(() => {
    const { list = [] } = data;
    if (Array.isArray(list)) {
      return list.map((item) => ({ key: item?.reason_id, label: item?.text }));
    }
    return [];
  }, [data]);
  return (
    <div className={styles.footerContainer}>
      <Dropdown
        overlay={
          <Menu onClick={({ key }: any) => onAction(key, actionType.placedTop)} items={menu} />
        }
        placement="bottomLeft"
      >
        <Button type="primary">置顶</Button>
      </Dropdown>
      <Dropdown
        overlay={
          <Menu onClick={({ key }: any) => onAction(key, actionType.placedBottom)} items={menu} />
        }
        placement="bottomLeft"
      >
        <Button>置底</Button>
      </Dropdown>
    </div>
  );
}

export default React.memo(Footer);
