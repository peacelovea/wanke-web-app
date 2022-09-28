import styles from './index.less';

interface IProps {
  avatar: string;
  reply_member: string | undefined;
  is_parent_author?: boolean | undefined;
}

function Title(props: IProps) {
  const { avatar, reply_member, is_parent_author } = props;
  return (
    <div>
      {avatar}
      {reply_member ? (
        <>
          <span className={styles.replyTitle}>回复</span> {reply_member}
        </>
      ) : null}
      {is_parent_author ? <span className={styles.avatarTag}>作者</span> : null}
    </div>
  );
}
export default Title;
