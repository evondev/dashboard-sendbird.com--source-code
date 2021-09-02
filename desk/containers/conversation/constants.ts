import { NAVIGATION_BAR_HEIGHT, CLOUD_FRONT_URL } from '@constants';

export enum TicketCloseStatusEnum {
  NOT_CONFIRMED = 'NOT_CONFIRMED',
  CONFIRMED = 'CONFIRMED',
  NOT_CLOSED = 'NOT_CLOSED',
  CLOSED_BUT_NOT_DEFINED = 'CLOSED_BUT_NOT_DEFINED',
  CLOSED_BY_SYSTEM = 'CLOSED_BY_SYSTEM',
  CLOSED_BY_CUSTOMER = 'CLOSED_BY_CUSTOMER',
  CLOSED_BY_ADMIN = 'CLOSED_BY_ADMIN',
  CLOSED_BY_AGENT = 'CLOSED_BY_AGENT',
}

// Constants
const MAX_MESSAGE_COUNT = 500;
const UPPER_OFFSET = 72 + NAVIGATION_BAR_HEIGHT;
const INPUT_PADDING = 18; // padding + border
// const INPUT_PADDING = 17;
const INITIAL_INPUT_HEIGHT = 74; // sync with agent profile
const INPUT_MAX_HEIGHT = 170;
const OVERALL_OFFSET = UPPER_OFFSET + INPUT_PADDING;

// Social
const INITIAL_SOCIAL_INPUT_HEIGHT = 107;
const SOCIAL_INPUT_MAX_HEIGHT = 300;
const SOCIAL_INPUT_HEADER_HEIGHT = 40;

export const CHAT_HEIGHTS = {
  UPPER_OFFSET,
  MAX_MESSAGE_COUNT,
  INPUT_PADDING,
  INITIAL_INPUT_HEIGHT,
  INPUT_MAX_HEIGHT,
  OVERALL_OFFSET,
  INITIAL_SOCIAL_INPUT_HEIGHT,
  SOCIAL_INPUT_MAX_HEIGHT,
  SOCIAL_INPUT_HEADER_HEIGHT,
};

export const SENDBIRD_AVATAR_URL = `${CLOUD_FRONT_URL}/brand/ic-avatar-desk-bot.svg`;

export enum WhatsAppRejectedCode {
  OutsideAllowedWindow = 1340,
}