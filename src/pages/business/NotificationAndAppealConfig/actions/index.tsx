import { Col, Row } from 'antd';
import type { ActionType } from '@ant-design/pro-table';
import View from '@/pages/business/NotificationAndAppealConfig/actions/View';
import PermissionButton from '@/components/PermissionButton';
import SwitchStatus from '@/components/SwitchStatus';
import { switchConfigStatus } from '@/services';

export interface ActionsProps {
  id: string;
  data: any;
  actionRef?: ActionType;
}

const Actions = ({ id, data, actionRef }: ActionsProps) => {
  return (
    <Row gutter={12}>
      <Col>
        <PermissionButton
          componentType="link"
          accessId="/business/notification-appeal-config:edit"
          to={`notification-appeal-config/edit/${id}?isEdit=true`}
        >
          编辑
        </PermissionButton>
      </Col>
      <Col>
        <View id={id} dataSource={data} />
      </Col>
      <Col>
        <SwitchStatus
          data={data}
          actionRef={actionRef}
          accessId="/business/notification-appeal-config:status"
          request={switchConfigStatus}
        />
      </Col>
    </Row>
  );
};

export default Actions;
