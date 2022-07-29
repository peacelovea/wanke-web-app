export enum JumpTypeEnum {
  site = 1,
  costumeDetail = 2,
  costumeLink = 3,
}

export enum ReceiverTypeEnum {
  beDisposer = 1,
  reporter,
  beConsulted,
  complainant,
  beCommunicator,
  qualified,
}

export enum TemplateTypeEnum {
  normal = 1,
  temporary = 2,
}

export enum OnlineStatusEnum {
  offline = 1,
  online = 2,
}

export enum NotificationDefaultConfigEnum {
  NoNotify = 1,
  HasNotify = 2,
}

export enum NotificationSpecialConfigEnum {
  NoSpecial = 1,
  HasSpecial = 2,
}

export enum AppealTypeConfigEnum {
  BothNotSupportAppeal = 1,
  BothSupportAppeal = 2,
  ConditionalSupportAppeal = 3,
  ConditionalNotSupportAppeal = 4,
}

export enum ViolationTypeConfigEnum {
  BothNotRecord = 1,
  BothRecord = 2,
  ConditionalRecord = 3,
  ConditionalNotRecord = 4,
}
