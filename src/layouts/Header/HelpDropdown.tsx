import { QuestionCircleTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import HeaderDropdown from './Dropdown';
import styles from './index.less';

const menuHeaderDropdown = <Menu className={styles.menu} />;

function HelpDropdown() {
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.actionIcon}`}>
        <QuestionCircleTwoTone style={{ fontSize: 16 }} />
      </span>
    </HeaderDropdown>
  );
}

export default HelpDropdown;
