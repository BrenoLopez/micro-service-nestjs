import { Notification } from 'src/application/entidades/notification.entity';
import { NotificationRepository } from 'src/application/repositories/notification.repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
