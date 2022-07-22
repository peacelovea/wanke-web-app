import { useState } from 'react';
import { Helmet } from 'umi';
import styles from './index.less';

function Left() {
  const [title, setTitle] = useState();

  return (
    <>
      <Helmet onChangeClientState={(state: any) => setTitle(state.title)} />
      <div className={styles.left}>{title}</div>
    </>
  );
}

export default Left;
