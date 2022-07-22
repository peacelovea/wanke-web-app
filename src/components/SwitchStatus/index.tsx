import { OnlineStatusEnum } from '@/scripts/enum';
import { message, Popconfirm } from 'antd';
import { useRequest } from 'ahooks';
import type { ActionType } from '@ant-design/pro-table';
import PermissionButton from '@/components/PermissionButton';

interface SwitchStatusProps {
  data: any;
  actionRef?: ActionType;
  accessId: string;
  request: (val?: any) => Promise<any>;
}

const SwitchStatus = ({ data, actionRef, accessId, request }: SwitchStatusProps) => {
  const { status, id } = data;

  const { run } = useRequest(request, { manual: true });

  const confirm = async () => {
    const newStatus =
      OnlineStatusEnum.offline === status ? OnlineStatusEnum.online : OnlineStatusEnum.offline;
    await run({ id, status: newStatus });
    message.success('操作成功');
    actionRef?.reload();
  };

  return (
    <>
      {OnlineStatusEnum.offline === status && (
        <Popconfirm title="是否确认上线?" onConfirm={confirm} okText="确定" cancelText="取消">
          <PermissionButton componentType="a" accessId={accessId}>
            上线
          </PermissionButton>
        </Popconfirm>
      )}
      {OnlineStatusEnum.online === status && (
        <Popconfirm title="是否确认下线?" onConfirm={confirm} okText="确定" cancelText="取消">
          <PermissionButton componentType="a" accessId={accessId}>
            下线
          </PermissionButton>
        </Popconfirm>
      )}
    </>
  );
};

export default SwitchStatus;
