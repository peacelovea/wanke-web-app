/**
 * Form 控件
 */
import React from 'react';
import { Form } from 'antd';
import { throttle, isString, isArray } from 'lodash';

import type { FormWidgetProps, ClearRule } from './interface';

function FormWidget(props: FormWidgetProps) {
  const {
    form,
    clearRules,
    onFinish,
    formItemLayout = {},
    children,
    onChange,
    ...rawProps
  } = props;

  const handleFinish = throttle(
    (values: any) => {
      onFinish?.(values);
    },
    300,
    { trailing: false },
  );

  const handleValuesChange = (changedValues: Record<string, any>) => {
    onChange?.(form.getFieldsValue(), form);
    if (!clearRules || !clearRules.length) return;

    const fieldNames = Object.keys(changedValues);

    const rules = clearRules.filter(({ changedName }: ClearRule) => {
      if (isArray(changedName)) return changedName?.some((name) => fieldNames.includes(name));

      return fieldNames.includes(changedName);
    });

    if (!rules?.length) return;

    rules.forEach(({ changedName, clearedName, emptied }) => {
      const needEmptied =
        typeof emptied === 'function'
          ? emptied(
              isArray(changedName)
                ? form.getFieldsValue(changedName)
                : form.getFieldValue(changedName),
            )
          : true;

      if (needEmptied && isString(clearedName) && form.getFieldValue(clearedName) !== undefined) {
        form.setFieldsValue({ [clearedName]: undefined });
        return;
      }

      if (isArray(clearedName)) {
        clearedName?.forEach((name: string) => {
          if (form.getFieldValue(name) === undefined || !needEmptied) return;

          form.setFieldsValue({ [name]: undefined });
        });
      }
    });
  };

  return (
    <Form
      form={form}
      layout="horizontal"
      onFinish={handleFinish}
      onValuesChange={handleValuesChange}
      {...formItemLayout}
      {...rawProps}
    >
      {children}
    </Form>
  );
}

export default FormWidget;
