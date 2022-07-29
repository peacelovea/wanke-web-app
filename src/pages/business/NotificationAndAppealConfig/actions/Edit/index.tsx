import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useParams, useRequest, useLocation } from 'umi';
import { createConfig, fetchConfigDetail, fetchObjectTypeList, editConfig } from '@/services';
import { Card, Form, Descriptions, Tag, Row, Col, Button, message } from 'antd';
import useActions from '@/models/useActions';
import _ from 'lodash';
import NotificationDefaultConfigSelector from '@/components/selectors/NotificationDefaultConfigSelector';
import { useForm } from 'antd/es/form/Form';
import SpecialConfig from '@/pages/business/NotificationAndAppealConfig/actions/Edit/SpecialConfig';
import { NotificationDefaultConfigEnum, NotificationSpecialConfigEnum } from '@/scripts/enum';
import { NOTIFICATION_DEFAULT_CONFIG } from '@/scripts/options';
import NotifyTemplateConfig from '@/pages/business/NotificationAndAppealConfig/actions/Edit/NotifyTemplateConfig';
import AppealConfig from '@/pages/business/NotificationAndAppealConfig/actions/Edit/AppealConfig';
import { NotificationSpecialConfigRadio } from '@/components/selectors/NotificationSpecialConfigSelector';
import { history } from 'umi';
import ViolationConfig from '@/pages/business/NotificationAndAppealConfig/actions/Edit/ViolationConfig';
import { numberToLetter } from '@/scripts/utils';
import { useEffect, useState } from 'react';
import { templatInitialValues } from '../../components/TemplatesConfigForm';

const VIOLATION_ACTIONS = [
  'remove',
  'suggest',
  'collapse',
  'ban',
  'close_question',
  'reset',
  'collaboration_violation',
  'disable_message',
  'make_wrong_edit',
];

function Edit() {
  const [form] = useForm();
  const { id } = useParams<Record<string, string>>();
  const localtion = useLocation();

  const { query } = localtion as any;
  const { isEdit } = query;

  // 确认创建的提交接口
  const { run: createConfigList } = useRequest(createConfig, { manual: true });
  // 获取某条需要编辑的数据内容
  const { run: fetchEditValues, data: fetchConfigData } = useRequest(
    (id) => fetchConfigDetail(id),
    { manual: true },
  );

  // 提交编辑接口
  const { run: editConfigList } = useRequest(editConfig, { manual: true });
  // 在form setFieldsValue之后做的标记，标记为true后，各项联动时会出发reset
  const [flagForReset, setFlagForReset] = useState(false);

  useEffect(() => {
    if (isEdit === 'true') {
      fetchEditValues(id).then((res) => {
        if (res) {
          const specialNotifyCondition =
            res.special_notify_factors?.map(({ key, value }: any) => ({
              condition: key,
              value: value.includes(',') ? value.split(',') : value,
            })) ?? [];

          console.log('specialNotifyCondition', specialNotifyCondition);
          const appealFactors =
            res.appeal_factors?.map(({ key, value }: any) => ({
              condition: key,
              value: value.includes(',') ? value.split(',') : value,
            })) ?? [];

          const violationRecords =
            res.violation_record_factors?.map(({ key, value }: any) => ({
              condition: key,
              value: value.includes(',') ? value.split(',') : value,
            })) ?? [];
          const values = res.templates;
          const notifyDetail = templatInitialValues?.map((item: any) => {
            const initValue = _.find(values, { receiver_type: item.receiver_type });

            if (initValue) {
              return {
                receiver_type: initValue.receiver_type,
                default_notify_action: NotificationDefaultConfigEnum.HasNotify,
                template_id: initValue.template_id,
              };
            }
            return item;
          });

          form.setFieldsValue({
            ...res,
            special_notify_factors: specialNotifyCondition,
            appeal_factors: appealFactors,
            violation_record_factors: violationRecords,
            templates: notifyDetail,
          });
          setFlagForReset(true);
        }
      });
    }
  }, []);

  const { actions } = useActions({ type: 'all' });

  const actionId = isEdit === 'true' ? fetchConfigData?.action_name : id;
  const actionZhName = _.find(actions, { name: actionId })?.desc;

  const dealWithConditionData = (arr?: { value: string; condition: string }[]) => {
    if (!arr?.length) return undefined;
    return arr.map((item, index) => ({
      value: Array.isArray(item.value) ? item?.value.join(',') : item.value,
      key: item.condition,
      name: numberToLetter(index),
    }));
  };
  const dealWithTemplatesData = (
    templates?: { default_notify_action: number; receiver_type: number; template_id: string }[],
  ) => {
    return templates?.filter(
      (item) => item.default_notify_action === NotificationDefaultConfigEnum.HasNotify,
    );
  };
  const handleFinish = async (values: any) => {
    if (values) {
      const commitData = {
        action_name: actionId,
        default_notify_action: values.default_notify_action,
        have_special_notify_config: values.have_special_notify_config,
        special_notify_factors: dealWithConditionData(values.special_notify_factors),
        special_notify_condition: values.special_notify_condition,
        templates: dealWithTemplatesData(values.templates),
        appeal_type: values.appeal_type,
        appeal_factors: dealWithConditionData(values.appeal_factors),
        appeal_condition: values.appeal_condition,
        violation_record_type: values.violation_record_type,
        violation_record_factors: dealWithConditionData(values.violation_record_factors),
        violation_record_condition: values.violation_record_condition,
      };
      if (isEdit === 'true') {
        await editConfigList({ id, params: commitData });
      } else {
        await createConfigList(commitData);
      }
      message.success('操作成功！');
    }
  };
  const handleFormReset = (handleTargets: string[]) => {
    if (isEdit === 'true' && flagForReset) {
      form.resetFields(handleTargets);
    }
  };
  const { data: objectTypeData } = useRequest<{ data: { list: API.ListItemType[] } }>(() =>
    fetchObjectTypeList({ action_name: actionId }),
  );

  const { list: objectTypeList } = objectTypeData || {};

  const { getFieldValue } = form;

  const horizontalWrapperCol = { span: 8 };
  const wrapperCol = { span: 6 };

  return (
    <PageHeaderWrapper>
      <Form form={form} onFinish={handleFinish}>
        <Card title="基础信息">
          <Descriptions title={null} column={2}>
            <Descriptions.Item label="操作名称">{actionZhName}</Descriptions.Item>
            <Descriptions.Item label="操作英文名">{actionId}</Descriptions.Item>
            <Descriptions.Item label="适用的内容类型">
              <div>
                {objectTypeList?.map((item: any) => (
                  <Tag key={`${item.name}-${item}`} style={{ margin: `${5}px` }}>
                    {item.desc}
                  </Tag>
                ))}
              </div>
            </Descriptions.Item>
          </Descriptions>
          <Row>
            <Col span={12}>
              <Form.Item
                wrapperCol={horizontalWrapperCol}
                name="default_notify_action"
                label="默认配置"
                rules={[{ required: true }]}
              >
                <NotificationDefaultConfigSelector />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                wrapperCol={horizontalWrapperCol}
                name="have_special_notify_config"
                label="是否需要非默认的特殊配置"
                rules={[{ required: true }]}
              >
                <NotificationSpecialConfigRadio />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* 特殊配置 */}
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, nextValues) => {
            if (
              prevValues.have_special_notify_config !== nextValues.have_special_notify_config ||
              prevValues.default_notify_action !== nextValues.default_notify_action
            ) {
              handleFormReset(['special_notify_factors', 'special_notify_condition']);
              return true;
            }
            return false;
          }}
        >
          {() => {
            if (
              getFieldValue('have_special_notify_config') ===
              NotificationSpecialConfigEnum.HasSpecial
            ) {
              const title = `特殊配置「${NOTIFICATION_DEFAULT_CONFIG.get(
                getFieldValue('default_notify_action') === NotificationDefaultConfigEnum.HasNotify
                  ? NotificationDefaultConfigEnum.NoNotify
                  : NotificationDefaultConfigEnum.HasNotify,
              )}」`;
              return <SpecialConfig title={title} wrapperCol={wrapperCol} form={form} />;
            }
            return null;
          }}
        </Form.Item>

        {/* 通知详情-模板 */}
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, nextValues) => {
            if (
              prevValues.default_notify_action !== nextValues.default_notify_action ||
              prevValues.have_special_notify_config !== nextValues.have_special_notify_config
            ) {
              handleFormReset(['templates']);
              return true;
            }
            return false;
          }}
        >
          {() => {
            if (
              getFieldValue('default_notify_action') === NotificationDefaultConfigEnum.HasNotify ||
              getFieldValue('have_special_notify_config') ===
                NotificationSpecialConfigEnum.HasSpecial
            ) {
              return <NotifyTemplateConfig form={form} />;
            }
            return null;
          }}
        </Form.Item>

        {/* 申诉条件 */}
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, nextValues) => {
            if (
              prevValues.templates !== nextValues.templates ||
              (getFieldValue('default_notify_action') === NotificationDefaultConfigEnum.NoNotify &&
                getFieldValue('have_special_notify_config') ===
                  NotificationSpecialConfigEnum.NoSpecial) ||
              prevValues.appeal_type !== nextValues.appeal_type
            ) {
              if (prevValues.appeal_type !== nextValues.appeal_type) {
                handleFormReset(['appeal_factors', 'appeal_condition']);
              } else {
                handleFormReset(['appeal_factors', 'appeal_condition', 'appeal_type']);
              }
              return true;
            }
            return false;
          }}
        >
          {() => {
            const getTemplatesValue = getFieldValue('templates');
            if (
              getTemplatesValue &&
              // 默认配置为‘发通知’或者特殊配置为‘是’时，显示申诉面板
              (getFieldValue('default_notify_action') === NotificationDefaultConfigEnum.HasNotify ||
                getFieldValue('have_special_notify_config') ===
                  NotificationSpecialConfigEnum.HasSpecial) &&
              // 通知详情里被处置者和举报者有一‘发送通知’，则显示申诉面板
              (getTemplatesValue[0]?.default_notify_action ===
                NotificationDefaultConfigEnum.HasNotify ||
                getTemplatesValue[1]?.default_notify_action ===
                  NotificationDefaultConfigEnum.HasNotify)
            ) {
              return <AppealConfig form={form} wrapperCol={wrapperCol} />;
            }
            return null;
          }}
        </Form.Item>

        {/* 是否记录违规日志 */}
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, nextValues) => {
            if (prevValues.templates !== nextValues.templates) {
              handleFormReset([
                'violation_record_factors',
                'violation_record_condition',
                'violation_record_type',
              ]);
              return true;
            }
            return false;
          }}
        >
          {() => {
            if (VIOLATION_ACTIONS.includes(actionId)) {
              return <ViolationConfig form={form} wrapperCol={wrapperCol} />;
            }
            return null;
          }}
        </Form.Item>

        <Card title={null} style={{ marginTop: 10 }}>
          <Form.Item wrapperCol={{ span: 18, offset: 10 }} style={{ marginBottom: 0 }}>
            <Button
              className="mg-r"
              onClick={() => history.push('/business/notification-appeal-config')}
            >
              返回
            </Button>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Card>
      </Form>
    </PageHeaderWrapper>
  );
}

export default Edit;
