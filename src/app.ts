import { message } from 'antd';
import { request } from './init/request';
import { layout } from './layouts';

message.config({
  top: 40,
});

export { request, layout };
