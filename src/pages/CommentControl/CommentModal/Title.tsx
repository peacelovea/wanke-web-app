import styles from './index.less';

interface IProps {
  avatar: string;
  reply_member: string | undefined;
}

function Title(props: IProps) {
  const { avatar, reply_member } = props;
  return (
    <div>
      {avatar}
      {reply_member ? (
        <>
          <span className={styles.replyTitle}>回复</span> {reply_member}
        </>
      ) : null}
    </div>
  );
}
export default Title;
