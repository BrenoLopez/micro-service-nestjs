import { Notification } from '../entidades/notification.entity';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
