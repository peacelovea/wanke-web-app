import { useRequest } from 'ahooks';
import Search from './Search';
import { fetchObjectTypes } from '@/services/commentControl';
import Detail from './Detail';
import type { ObjectTypes } from './commentControl';
import styles from './index.less';

function CommentControl() {
  const { data: { data: dataSource } = {}, run: onSearch } = useRequest<ObjectTypes>(
    fetchObjectTypes,
    { manual: true },
  );
  return (
    <div className={styles.container}>
      <Search onSearch={onSearch} />
      {dataSource ? <Detail dataSource={dataSource} /> : null}
    </div>
  );
}
export default CommentControl;
