import Avatar from './AvatarDropdown';
import styles from './index.less';
import Left from './Left';

function Right() {
  return (
    <div className={styles.right}>
      <Left />
      <Avatar />
    </div>
  );
}

export default Right;
