import { SubmitPanel } from '@/components/ProFormGo';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Form, Space } from 'antd';
import { BUSINESS_GROUP_MODIFY } from '../setting';
import cx from 'classnames';
import styles from '@/components/ProFormGo/SubmitPanel/index.less';
import { history } from 'umi';

const BusinessGroupModify = () => {
  const onFinish = () => {
    console.log('onFinish');
  };
  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 24,
    },
  };
  const footerRender = () => (
    <Form.Item {...tailLayout} className={cx(styles.footer, 'tj-submit-panel-footer')}>
      <Space>
        <Button htmlType="button" onClick={() => history.goBack()}>
          返回
        </Button>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Space>
    </Form.Item>
  );
  return (
    <PageHeaderWrapper>
      <SubmitPanel
        action="add"
        footerRender={footerRender}
        formGroups={BUSINESS_GROUP_MODIFY}
        onFinish={onFinish}
      />
    </PageHeaderWrapper>
  );
};

export default BusinessGroupModify;
