import { Col, Row } from 'antd';
import type { ActionType } from '@ant-design/pro-table';
import View from '@/pages/business/TemplateManage/actions/View';
import PermissionButton from '@/components/PermissionButton';
import SwitchStatus from '@/components/SwitchStatus';
import { switchTemplateStatus } from '@/services';

export interface ActionsProps {
  id: number;
  data: any;
  actionRef?: ActionType;
}

const Actions = ({ id, data, actionRef }: ActionsProps) => {
  return (
    <Row gutter={12}>
      <Col>
        <View id={id} />
      </Col>
      <Col>
        <PermissionButton
          componentType="link"
          accessId="/business/template-manage:edit"
          to={`/business/template-manage/edit/${id}`}
        >
          编辑
        </PermissionButton>
      </Col>
      <Col>
        <SwitchStatus
          data={data}
          actionRef={actionRef}
          accessId="/business/template-manage:status"
          request={switchTemplateStatus}
        />
      </Col>
    </Row>
  );
};

export default Actions;
