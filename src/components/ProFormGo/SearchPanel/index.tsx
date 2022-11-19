/**
 * 查询面板
 */
import React, { useState, useMemo, useEffect } from 'react';
import { Card, Form, Col, Button } from 'antd';
import { useUrlSearchParams } from '@umijs/use-params';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
// import useUserRoles from '@/models/useUserRoles';
import { throttle } from 'lodash';
import moment from 'moment';
import FormTool from '../FormTool';
import FormWidget from '../FormWidget';

import { getFormattedParamsFormUrl } from './utils';
import type { SearchPanelProps } from './interface';
import type { BasicFormItem } from '../FormTool/interface';

import styles from './index.less';

function SearchPanel({
  onSubmit,
  onReset,
  onExpand,
  showExpand = true,
  collapsed,
  items,
  initialValues = {},
  expandInitialValues = {},
  clearRules,
  syncToQuery,
  syncToUrl,
  onSyncToQuery,
  onChange,
}: SearchPanelProps) {
  const { basic = [], more = [] } = items || {};
  const [expand, setExpand] = useState(collapsed);
  // const { roles = [] } = useUserRoles();

  const [form] = Form.useForm();

  const [urlParams, setUrlParams] = useUrlSearchParams();

  useEffect(() => {
    // 简易版实现方案
    if (syncToQuery && Object.keys(urlParams)?.length > 0) {
      const settings = expand ? [...basic, ...more] : basic;
      const values = expand ? { ...initialValues, ...expandInitialValues } : initialValues;
      const params = { ...values, ...urlParams };
      let formattedParams;
      if (params.unit === '0') {
        formattedParams = {
          unit: 0,
          date: moment(params.date, 'YYYYMMDDHHmmss'),
        };
      } else {
        formattedParams = getFormattedParamsFormUrl(params, settings);
      }
      form.setFieldsValue(formattedParams);
      onSyncToQuery?.(formattedParams);
      onSubmit?.(formattedParams);
    }
  }, [syncToQuery]);

  const handleReset = throttle(
    () => {
      form.resetFields();
      onChange?.({ unit: 1 });
      onReset?.(initialValues);
    },
    300,
    { trailing: false },
  );

  const handleExpand = () => {
    const expanded = !expand;
    setExpand(expanded);
    onExpand?.(expanded);
    form.setFieldsValue({ ...expandInitialValues });
  };

  const handleFinish = (values: any) => {
    // 暂不支持单个 setting 配置 syncToUrl
    if (syncToUrl) {
      const formattedParams = typeof syncToUrl === 'function' ? syncToUrl(values) : values;
      setUrlParams(formattedParams);
    }
    onSubmit?.(values);
  };

  const formToolItems: BasicFormItem[] = expand ? [...basic, ...more] : basic;

  const memoTool = useMemo(
    () => (
      <FormTool items={formToolItems}>
        <Col style={{ textAlign: 'right' }}>
          <Button style={{ margin: '0 12px' }} onClick={handleReset}>
            重置
          </Button>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          {showExpand && (
            <a className={styles.expandText} onClick={handleExpand}>
              {expand ? (
                <>
                  收起
                  <UpOutlined className="mg-l" />
                </>
              ) : (
                <>
                  展开
                  <DownOutlined className="mg-l" />
                </>
              )}
            </a>
          )}
        </Col>
      </FormTool>
    ),
    [expand, formToolItems],
  );
  return (
    <Card className={styles.proFormGo}>
      <FormWidget
        form={form}
        onFinish={handleFinish}
        initialValues={initialValues}
        clearRules={clearRules}
        onChange={onChange}
      >
        {memoTool}
      </FormWidget>
    </Card>
  );
}

export default SearchPanel;
