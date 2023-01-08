import { Notification } from '@application/entities';
import { NotificationRepository } from '@application/repositories/notification.repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );
    return notification ?? null;
  }
  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }
  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }
  async save(notification: Notification): Promise<void> {
    const notificaitonIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );
    if (notificaitonIndex >= 0) {
      this.notifications[notificaitonIndex] = notification;
    }
  }
}
