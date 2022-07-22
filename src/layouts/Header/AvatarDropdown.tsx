import { Avatar } from 'antd';
import { useModel } from 'umi';
import HeaderDropdown from './Dropdown';
import styles from './index.less';

function AvatarDropdown() {
  const { initialState } = useModel('@@initialState');
  const { display = '' } = initialState?.userInfo?.user || {};

  return (
    <HeaderDropdown overlay={''}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar}>
          {display?.[0] ?? ''}
        </Avatar>
        <span className={`${styles.name} anticon`}>{display}</span>
      </span>
    </HeaderDropdown>
  );
}

export default AvatarDropdown;
