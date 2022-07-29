import {
  AppealTypeConfigEnum,
  JumpTypeEnum,
  NotificationDefaultConfigEnum,
  NotificationSpecialConfigEnum,
  ReceiverTypeEnum,
  TemplateTypeEnum,
  ViolationTypeConfigEnum,
} from '@/scripts/enum';

export const JUMP_TYPE_OPTIONS = new Map([
  [JumpTypeEnum.site, '站务中心-我的举报'],
  [JumpTypeEnum.costumeDetail, '自定义详情页文案'],
  [JumpTypeEnum.costumeLink, '自定义链接'],
]);

export const RECEIVER_TYPE_OPTIONS = new Map([
  [ReceiverTypeEnum.beDisposer, '被处置者'],
  [ReceiverTypeEnum.reporter, '举报者'],
  [ReceiverTypeEnum.beConsulted, '被咨询者'],
]);

export const TEMPLATE_TYPE_OPTIONS = new Map([
  [TemplateTypeEnum.normal, '常规'],
  [TemplateTypeEnum.temporary, '临时'],
]);

export const NOTIFICATION_DEFAULT_CONFIG = new Map([
  [NotificationDefaultConfigEnum.NoNotify, '不发通知'],
  [NotificationDefaultConfigEnum.HasNotify, '发通知'],
]);

export const NOTIFICATION_SPECIAL_CONFIG = new Map([
  [NotificationSpecialConfigEnum.NoSpecial, '无'],
  [NotificationSpecialConfigEnum.HasSpecial, '是'],
]);

export const APPEAL_CONFIG_TYPE = new Map([
  [AppealTypeConfigEnum.BothNotSupportAppeal, '都不支持申诉'],
  [AppealTypeConfigEnum.BothSupportAppeal, '都支持申诉'],
  [AppealTypeConfigEnum.ConditionalSupportAppeal, '满足条件的可申诉'],
  [AppealTypeConfigEnum.ConditionalNotSupportAppeal, '满足条件后不可申诉'],
]);

export const VIOLATION_CONFIG_TYPE = new Map([
  [ViolationTypeConfigEnum.BothNotRecord, '全都不记录'],
  [ViolationTypeConfigEnum.BothRecord, '都支持记录'],
  [ViolationTypeConfigEnum.ConditionalRecord, '满足条件的可记录'],
  [ViolationTypeConfigEnum.ConditionalNotRecord, '满足条件后不可记录'],
]);

export const CONFIG_CONDITIONS = new Map([
  ['object_type', '内容类型'],
  ['source', '处置来源'],
  ['reason', '处置理由'],
  ['rule', '策略ID'],
  ['member_type', '用户类型'],
  ['seconds_between_update_and_operate', '处置时间'],
]);
