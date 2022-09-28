import { Form, Select, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ObjectTypesSelector from '@/components/selectors/ObjectTypesSelector';
import { kindOptions, noop, initialValues, kindFieldMap } from './config';
import type { SearchDataType } from './commentControl';
import styles from './index.less';

interface IProps {
  onSearch: (value: SearchDataType) => void;
}

function Search(props: IProps) {
  const [form] = Form.useForm();
  const typeValue = Form.useWatch('obj_kind', form);
  return (
    <div className={styles.searchContainer}>
      <Form
        form={form}
        layout="inline"
        initialValues={initialValues}
        onFinish={props?.onSearch || noop}
      >
        <Form.Item name="obj_type" rules={[{ required: true, message: '所属对象必填' }]}>
          <ObjectTypesSelector placeholder="所属对象" />
        </Form.Item>
        <Form.Item name="obj_kind" className={styles.itemKind}>
          <Select options={kindOptions} />
        </Form.Item>
        <Form.Item
          name={kindFieldMap[typeValue]}
          rules={[{ required: true, message: '内容信息必填' }]}
        >
          <Input placeholder="内容信息" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
            搜索
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Search;
