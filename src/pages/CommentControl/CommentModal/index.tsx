import { useEffect } from 'react';
import { Modal, Skeleton } from 'antd';
// import { ExclamationCircleOutlined } from '@ant-design/icons';
import { fetchCommentList } from '@/services/commentControl';
import CommentList from './CommentList';
import usePaging from './usePaging';
import { defaultCommentListParams } from '../config';

interface IProps {
  visible: boolean;
  object_id?: number | string;
  object_type?: string;
  onCancel: () => void;
}

// const confirm = () => {
//   Modal.confirm({
//     title: '确认操作',
//     icon: <ExclamationCircleOutlined />,
//     content: '请确认操作此内容置顶/置底',
//     okText: '确认',
//     cancelText: '取消',
//   });
// };

function CommentModal(props: IProps) {
  const { object_id, object_type, visible, onCancel } = props;
  const { loading, offset, dataSource, run, pagingParms } = usePaging(
    fetchCommentList,
    defaultCommentListParams.limit,
  );
  const onScroll = () => {
    if (!loading) {
      run({
        offset,
        object_id,
        object_type,
        ...defaultCommentListParams,
      });
    }
  };

  useEffect(() => {
    onScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAction = () => {};

  return (
    <Modal
      title="评论"
      visible={visible}
      width={1000}
      style={{ top: 20 }}
      footer={null}
      onCancel={onCancel}
    >
      {dataSource ? (
        <CommentList
          dataSource={dataSource}
          pagingParms={pagingParms}
          onAction={onAction}
          onScroll={onScroll}
        />
      ) : (
        <Skeleton active={loading} />
      )}
    </Modal>
  );
}
export default CommentModal;
