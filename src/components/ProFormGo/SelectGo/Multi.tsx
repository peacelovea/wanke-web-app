import React, { useMemo, useState } from 'react';
import { Select, Tooltip } from 'antd';
import type { SelectGoProps } from './index';

const { Option } = Select;

export type MultiProps = SelectGoProps
const Multi: React.FC<MultiProps> = (props) => {
  const { mode, tooltip = false, valueEnum, options = [], onChange, ...rawProps } = props;
  const [value, setValue] = useState<any[]>([]);
  const dependency = JSON.stringify(options);

  const opts = useMemo(
    () => (options?.length > 0 ? [{ label: '全选', value: -99 }, ...options] : []),
    [dependency],
  );

  const selectedAll: any[] = useMemo(() => options?.map(({ value }) => value) || [], [dependency]);

  const handleChange = (val: any, option: any) => {
    // 判断是否有全选
    const hasSelectAll = (arr: any) => {
      return arr?.some((item: any) => item.value === -99);
    };
    // 点了全选并且在所选和请求列表等长时，取消全选
    if (val?.length === opts.length && hasSelectAll(option)) {
      setValue([]);
      onChange?.([], option);
      return;
    }

    // 点了全选但是所选和请求列表不等长时，全选
    if (val.includes(-99)) {
      setValue(selectedAll);
      onChange?.(selectedAll, option);
      return;
    }

    setValue(val);
    onChange?.(val, option);
  };

  const optionsList = opts;

  return (
    <>
      {tooltip ? (
        <Select
          mode="multiple"
          filterOption={(inputValue, option) =>
            option?.children?.props?.title?.includes(inputValue)
          }
          value={value}
          onChange={handleChange}
          {...rawProps}
        >
          {optionsList?.map(({ label, value }) => {
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
        <Select
          mode="multiple"
          value={value}
          options={opts}
          onChange={handleChange}
          {...rawProps}
        />
      )}
    </>
  );
};

export default Multi;
