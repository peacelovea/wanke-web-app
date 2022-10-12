import { useEffect, useRef, useState } from 'react';
import type { FormPanelRefs } from '@/pages/business/TemplateManage/components/FormPanel';
import { Modal, Descriptions, Divider, Tag } from 'antd';
import { useRequest } from 'umi';
import { history } from '@@/core/history';
import { fetchConfigDetail } from '@/services';
import { NotificationDefaultConfigEnum } from '@/scripts/enum';
import DescriptionsWithNoLength from './DescriptionsWithNoLength';
import {
  NOTIFICATION_DEFAULT_CONFIG,
  NOTIFICATION_SPECIAL_CONFIG,
  APPEAL_CONFIG_TYPE,
  VIOLATION_CONFIG_TYPE,
  CONFIG_CONDITIONS,
  RECEIVER_TYPE_OPTIONS,
} from '@/scripts/options';
import TableView from './TableViewComp';
import useObjectType from '@/models/useObjectType';
import _ from 'lodash';
import useSource from '@/models/useSource';
import useMemberType from '@/models/useMemberType';
import useTemplates from '@/models/useTemplates';
import { useAccess } from '@@/plugin-access/access';
import { convertUnitToNum } from '../../components/ConditionsForm';

interface DataTypes {
  name: string;
  key: string;
  value: string;
}
interface InformDataType {
  id: number;
  receiver_type: number;
  template_id: number;
}
interface ViewProps {
  id: string;
  dataSource: any;
}

const View = ({ id, dataSource }: ViewProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const formRef = useRef<FormPanelRefs>(null);
  const { objectType } = useObjectType();
  const { source } = useSource();
  const { memberType } = useMemberType();

  const { accessButtonFilter } = useAccess();

  const { form } = formRef?.current || {};

  const handleCancel = () => {
    setVisible(false);
  };

  const { run, data = {} } = useRequest(fetchConfigDetail, {
    manual: true,
    onSuccess: (res) => {
      if (res) {
        form?.setFieldsValue(res);
      }
    },
  });
  const { templates: templatesSource } = useTemplates();

  const { action_name_cn, object_types } = dataSource;

  const {
    action_name,
    default_notify_action,
    appeal_condition,
    have_special_notify_config,
    special_notify_factors,
    special_notify_condition,
    templates,
    appeal_type,
    appeal_factors,
    violation_record_type,
    violation_record_factors,
    violation_record_condition,
  } = data || {};
  const columns = [
    {
      title: '条件',
      dataIndex: 'name',
    },
    {
      title: '名称',
      width: 220,
      dataIndex: 'key',
    },
    {
      title: '值',
      dataIndex: 'value',
    },
  ];

  const templateColumns = [
    {
      title: '名称',
      dataIndex: 'key',
    },
    {
      title: '通知模板',
      dataIndex: 'value',
    },
  ];

  useEffect(() => {
    if (id && visible) {
      run(id);
    }
  }, [visible, id]);

  const conditionValueItem = (type: string, value: string) => {
    switch (type) {
      case 'object_type':
        return _.find(objectType, { name: value })?.desc ?? '-';
      case 'source':
        return _.find(source, { name: value })?.desc ?? '-';
      case 'member_type':
        return _.find(memberType, { name: value })?.desc ?? '-';
      default:
        return value;
    }
  };

  const specialArr =
    special_notify_factors?.map(({ name, key, value }: DataTypes) => {
      const newKey = CONFIG_CONDITIONS.get(key);
      const secondsValue = value?.split(',');
      const switchTimeEngToChine = (time: string) => {
        switch (time) {
          case 'minute':
            return '分';
          case 'hour':
            return '时';
          case 'day':
            return '天';
          case 'week':
            return '周';
          default:
            return '分';
        }
      };
      return {
        name,
        key: newKey,
        // 处置时间需要特别操作：把关于总秒数和单位转化为用户所需要的真实数据
        value:
          key !== 'seconds_between_update_and_operate'
            ? value
                ?.split(',')
                ?.map((item) => conditionValueItem(key, item))
                ?.join(',') ?? '-'
            : Number(secondsValue[0]) / convertUnitToNum(secondsValue[1]) +
              switchTimeEngToChine(secondsValue[1]),
      };
    }) ?? [];

  const appealArr =
    appeal_factors?.map(({ name, key, value }: DataTypes) => {
      const newKey = CONFIG_CONDITIONS.get(key);
      return {
        name,
        key: newKey,
        value:
          value
            ?.split(',')
            ?.map((item) => conditionValueItem(key, item))
            ?.join(',') ?? '-',
      };
    }) ?? [];

  const InformArr =
    templates?.map(({ id, receiver_type, template_id }: InformDataType) => {
      const templateName = _.find(templatesSource, { id: template_id })?.template_name;
      return {
        name: id,
        key: RECEIVER_TYPE_OPTIONS.get(receiver_type),
        value: templateName ? `${template_id}-${templateName}` : '-',
      };
    }) ?? [];

  const violationArr =
    violation_record_factors?.map(({ name, key, value }: DataTypes) => {
      const newKey = CONFIG_CONDITIONS.get(key);
      return {
        name,
        key: newKey,
        value:
          value
            ?.split(',')
            ?.map((item) => conditionValueItem(key, item))
            ?.join(',') ?? '-',
      };
    }) ?? [];
  return (
    <>
      <a href="#" onClick={() => setVisible(true)}>
        查看
      </a>
      {visible && (
        <Modal
          visible={visible}
          title="查看"
          width={900}
          forceRender={true}
          maskClosable={false}
          okText="去编辑"
          cancelText="关闭"
          okButtonProps={{
            hidden: !accessButtonFilter('/business/notification-appeal-config:edit'),
          }}
          onCancel={handleCancel}
          onOk={() => history.push(`/business/notification-appeal-config/edit/${id}?isEdit=true`)}
        >
          <>
            <Descriptions title={'基础信息'} column={2}>
              <Descriptions.Item label="操作名称">{action_name_cn}</Descriptions.Item>
              <Descriptions.Item label="操作英文名">{action_name}</Descriptions.Item>
              <Descriptions.Item label="适用的内容类型">
                <div>
                  {object_types?.map((item: string, index: number) => (
                    <Tag key={`${item}-${index}`} style={{ marginBottom: `${5}px` }}>
                      {item}
                    </Tag>
                  )) ?? '-'}
                </div>
              </Descriptions.Item>
            </Descriptions>
            <Descriptions column={2}>
              <Descriptions.Item label="默认配置">
                {NOTIFICATION_DEFAULT_CONFIG.get(default_notify_action)}
              </Descriptions.Item>
              <Descriptions.Item label="是否需要非默认的特殊配置">
                {NOTIFICATION_SPECIAL_CONFIG.get(have_special_notify_config)}
              </Descriptions.Item>
            </Descriptions>
            <Divider />
          </>

          {specialArr?.length ? (
            <>
              <Descriptions title={'特殊配置'} column={1}>
                <Descriptions.Item>
                  <TableView dataList={specialArr} columns={columns} size="small" />
                </Descriptions.Item>
                <Descriptions.Item label="条件组合">{special_notify_condition}</Descriptions.Item>
              </Descriptions>
              <Divider />
            </>
          ) : null}

          {InformArr?.length ? (
            <>
              <Descriptions title={'通知详情'} column={1}>
                <Descriptions.Item>
                  <TableView dataList={InformArr} columns={templateColumns} size="small" />
                </Descriptions.Item>
              </Descriptions>
              <Divider />
            </>
          ) : (
            <>
              <Descriptions title={'通知详情'} column={1}>
                <Descriptions.Item label="被处置者">
                  {NOTIFICATION_DEFAULT_CONFIG.get(NotificationDefaultConfigEnum.NoNotify)}
                </Descriptions.Item>
                <Descriptions.Item label="举报者">
                  {NOTIFICATION_DEFAULT_CONFIG.get(NotificationDefaultConfigEnum.NoNotify)}
                </Descriptions.Item>
              </Descriptions>
              <Divider />
            </>
          )}

          {appealArr?.length ? (
            <>
              <Descriptions title={'申诉条件'} column={1}>
                <Descriptions.Item label="申诉配置">
                  {APPEAL_CONFIG_TYPE.get(appeal_type)}
                </Descriptions.Item>
                <Descriptions.Item>
                  <TableView dataList={appealArr} columns={columns} size="small" />
                </Descriptions.Item>
                <Descriptions.Item label="条件组合">{appeal_condition}</Descriptions.Item>
              </Descriptions>
              <Divider />
            </>
          ) : (
            <DescriptionsWithNoLength
              title={'申诉条件'}
              show={APPEAL_CONFIG_TYPE.get(appeal_type) ?? ''}
              column={1}
            />
          )}

          {violationArr?.length ? (
            <Descriptions title={'违规日志记录'} column={1}>
              <Descriptions.Item label="违规日志配置">
                {VIOLATION_CONFIG_TYPE.get(violation_record_type)}
              </Descriptions.Item>
              <Descriptions.Item>
                <TableView dataList={violationArr} columns={columns} size="small" />
              </Descriptions.Item>
              <Descriptions.Item label="条件组合">{violation_record_condition}</Descriptions.Item>
            </Descriptions>
          ) : (
            <DescriptionsWithNoLength
              title={'违规日志记录'}
              show={VIOLATION_CONFIG_TYPE.get(violation_record_type) ?? ''}
              column={1}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default View;
