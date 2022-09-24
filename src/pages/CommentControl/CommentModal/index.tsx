/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Modal } from 'antd';
import { useRequest } from 'ahooks';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { fetchCommentList } from '@/services/commentControl';
import CommentList from './CommentList';
import usePaging from './usePaging';
import { submitSelectKey } from '@/services/commentControl';
import { defaultCommentListParams } from '../config';

interface IProps {
  visible: boolean;
  object_id?: number | string;
  object_type?: string;
  onCancel: () => void;
}

const confirm = (onOk: () => void) => {
  Modal.confirm({
    title: '确认操作',
    icon: <ExclamationCircleOutlined />,
    content: '请确认操作此内容置顶/置底',
    okText: '确认',
    cancelText: '取消',
    onOk,
  });
};

function CommentModal(props: IProps) {
  const { object_id, object_type, visible, onCancel } = props;
  const { loading, offset, dataSource, run, pagingParms, onRefresh } = usePaging(
    fetchCommentList,
    defaultCommentListParams.limit,
  );
  const { loading: submitLoading, run: onSubmit } = useRequest(submitSelectKey, {
    manual: true,
    onSuccess: () => {
      onRefresh({ object_id, object_type, ...defaultCommentListParams });
      // 如果在刷新时处于滚动条的底部, 数据来之后处于底部会不断请求,发起请求之后滚动到顶部
      const scrollDom = document.getElementById('scroll-view-commentModalParent');
      if (scrollDom) scrollDom.scrollTo({ top: 0 });
    },
    onError: () => {
      onRefresh({ object_id, object_type, ...defaultCommentListParams });
      const scrollDom = document.getElementById('scroll-view-commentModalParent');
      if (scrollDom) scrollDom.scrollTo({ top: 0 });
    },
  });

  const onScroll = () => {
    if (loading) {
      return;
    }
    run({
      offset,
      object_id,
      object_type,
      ...defaultCommentListParams,
    });
  };

  const onOk = (action: string, selectKey: Map<string, boolean>) => {
    const params = [...selectKey.entries()].map((item) => {
      const [object_id] = item;
      return {
        object_id,
        object_type,
        reason_id: 30003, // 没有特别含义后端说接口统一，占位
        action,
      };
    });
    onSubmit({ params });
  };

  const onAction = (action: string, selectKey: Map<string, boolean>) => {
    confirm(() => onOk(action, selectKey));
  };

  useEffect(() => {
    if (visible) {
      onScroll();
    }
  }, [visible]);

  return (
    <Modal
      title="评论"
      visible={visible}
      width={1000}
      style={{ top: 20 }}
      footer={null}
      destroyOnClose
      onCancel={onCancel}
    >
      <CommentList
        dataSource={dataSource}
        pagingParms={pagingParms}
        onAction={onAction}
        onScroll={onScroll}
        loading={submitLoading}
      />
    </Modal>
  );
}
export default CommentModal;
