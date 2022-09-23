import { Checkbox } from 'antd';
import { noop } from '../config';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import styles from './index.less';

interface IProps {
  num: number;
  checked: boolean;
  selectNum: number;
  onSelectAll: (e: CheckboxChangeEvent) => void;
}

function Header(props: IProps) {
  return (
    <div className={styles.headerContainer}>
      <Checkbox onChange={props.onSelectAll || noop} checked={props.checked} />
      <span className={styles.checkboxLabel}>全选</span>
      {`已选 ${props?.selectNum} 评论  ${props?.num || 0}`}
    </div>
  );
}

export default Header;
