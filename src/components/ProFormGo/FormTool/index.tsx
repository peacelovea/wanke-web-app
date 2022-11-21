/**
 * @description 基于 antd Form 封装的配置化表单
 */
import React from 'react';
import { Form, Row, Col } from 'antd';
import { omit } from 'lodash';
import type { FormInstance } from 'antd/lib/form';
import InputGo from '../InputGo';
import DescriptionGO from '@/components/DescriptionGo';
import SelectGo from '../SelectGo';

const FormTool: React.FC<FormToolProps> = (props) => {
  const { action, items, className, extraShowParams = {}, children } = props;

  // const { roles = [] } = extraShowParams;

  const isReadOnly = action === 'readonly';
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24 }} className={className}>
      {items?.map((child: BasicFormItem) => {
        const {
          type: componentType,
          name,
          label,
          rules,
          colSpan,
          colOffset,
          formItemProps,
          show = true,
          disabled = false,
          style,
          renderFormItem,
          ...componentProps
        } = omit(child, ['syncToQuery']);

        return (
          <Col key={label || name || componentType} span={colSpan} offset={colOffset}>
            <Form.Item noStyle shouldUpdate>
              {(fm: FormInstance) => {
                const visible = typeof show === 'function' ? show(fm, extraShowParams) : show;
                if (!visible) return null;

                const rulesList = typeof rules === 'function' ? rules?.(props, fm) : rules;

                const disabledStatus =
                  // @ts-ignore
                  typeof disabled === 'function' ? disabled?.(props, fm) : disabled;
                const unallowable = isReadOnly ? true : disabledStatus;

                const selectProps = {
                  disabled: unallowable,
                  style,
                  ...componentProps,
                };

                let content: any;
                switch (componentType) {
                  case 'FormInputText':
                    content = <InputGo style={style} disabled={unallowable} {...componentProps} />;
                    break;
                  case 'FormText':
                    content = (
                      <DescriptionGO style={style} disabled={unallowable} {...componentProps} />
                    );
                    break;
                  case 'FormSimpleSelect':
                    content = <SelectGo {...selectProps} />;
                    break;
                  default:
                    content = <></>;
                    break;
                }

                if (componentType && componentType.includes('Form')) {
                  content = (
                    <Form.Item name={name} label={label} rules={rulesList} {...formItemProps}>
                      {content}
                    </Form.Item>
                  );
                }
                return content;
              }}
            </Form.Item>
          </Col>
        );
      })}
      {children}
    </Row>
  );
};

export default FormTool;
