import React from 'react';
import { Select, Tooltip } from 'antd';
import cx from 'classnames';
import { WIDTH_SIZE_ENUM } from '@/components/ProFormGo/constants';
import type { SelectValue, SelectProps } from 'antd/lib/select';
import type { AbstractTooltipProps } from 'antd/lib/tooltip';
import Multi from './Multi';
import { fromValueEnum } from './utils';
import styles from '../index.less';

const { Option } = Select;

export interface SelectGoProps extends Omit<SelectProps<SelectValue>, 'children'> {
  valueEnum?: ProTableGoColumns['valueEnum'];

  /**
   * 是否显示 QA, 默认 false
   */
  showQA?: ShowQA;

  /**
   * 是否开启文字提示, 默认 false
   */
  tooltip?: boolean | AbstractTooltipProps;

  /**
   * 按照标准固定宽度，默认 false
   */
  fixedWidth?: boolean;
}

export interface CommonSelectGoProps extends SelectGoProps {
  addedDefaultOption?: boolean;
  operation_ids?: number[];
}

const SelectGo: React.FC<SelectGoProps> = (props) => {
  const {
    mode,
    showQA,
    fixedWidth = false,
    tooltip = false,
    style,
    valueEnum,
    options,
    allowClear = true,
    placeholder = '请选择',
    ...rawProps
  } = props;
  const _style = fixedWidth ? { width: WIDTH_SIZE_ENUM.s } : style;

  const _options: SelectGoProps['options'] = valueEnum ? fromValueEnum(valueEnum) : options;

  const _props = {
    placeholder,
    allowClear,
    optionFilterProp: 'label',
    style: _style,
    ...rawProps,
  };

  const competent = tooltip ? (
    <Select
      mode={mode}
      filterOption={(inputValue, option) => option?.children?.props?.title?.includes(inputValue)}
      {..._props}
    >
      {_options?.map(({ label, value }) => {
        return (
          <Option key={value} value={value}>
            <Tooltip title={label} placement="left" {...tooltip}>
              <div className="text-ellipsis">{label}</div>
            </Tooltip>
          </Option>
        );
      })}
    </Select>
  ) : (
    <Select mode={mode} options={_options} {..._props} />
  );

  return (
    <div className={cx(styles.box, { [styles.mgR]: showQA && fixedWidth })}>
      {mode === 'multiple' ? <Multi options={_options} tooltip={tooltip} {..._props} /> : competent}
    </div>
  );
};

export default SelectGo;
