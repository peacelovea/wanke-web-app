/**
 * @description 提交面板-编辑/新增
 */

import { Form, Card, Button, Space } from 'antd';
import { history } from 'umi';
import cx from 'classnames';
import { throttle, noop } from 'lodash';

import FormTool from '../FormTool';
import FormWidget from '../FormWidget';

import type { SubmitPanelProps } from './interface';
import styles from './index.less';
import FormTitle from '@/components/FormTitle';

const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 24,
  },
};

const formLayout = {
  labelCol: {
    xs: { span: 12 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

function SubmitPanel({
  className,
  action,
  formGroups,
  initialValues,
  footerRender,
  onFinish,
  onFinishFailed = noop,
  ...rawProps
}: SubmitPanelProps) {
  const [form] = Form.useForm();

  const onCancel = () => {
    history.goBack();
  };

  const handleFinish = throttle(
    (values: any) => {
      onFinish?.(values);
    },
    3000,
    { trailing: false },
  );
  return (
    <Card className={cx(styles.submitWidget, className)}>
      <FormWidget
        form={form}
        initialValues={initialValues}
        formItemLayout={formLayout}
        onFinish={handleFinish}
        onFinishFailed={onFinishFailed}
        {...rawProps}
      >
        {formGroups &&
          [...formGroups].map((grp: any) => {
            const { type, title, children } = grp;
            if (type === 'ProFormGroup') {
              return (
                <div key={title}>
                  <FormTitle title={title} />
                  <FormTool action={action} items={children} />
                </div>
              );
            }
            return <></>;
          })}
        {footerRender ? (
          footerRender(onFinish, form, initialValues)
        ) : (
          <Form.Item {...tailLayout} className={cx(styles.footer, 'tj-submit-panel-footer')}>
            <Space>
              <Button htmlType="button" onClick={onCancel}>
                返回
              </Button>
              <Button disabled={action === 'readonly'} type="primary" htmlType="submit">
                提交
              </Button>
            </Space>
          </Form.Item>
        )}
      </FormWidget>
    </Card>
  );
}

export default SubmitPanel;
