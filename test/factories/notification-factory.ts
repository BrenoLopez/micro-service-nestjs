import { Notification, Content } from '@application/entities';
import { NotificationProps } from '@application/entities/notification.entity';
import { randomUUID } from 'crypto';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: randomUUID(),
    category: 'any_category',
    content: new Content('any_content'),
    ...override,
  });
}
