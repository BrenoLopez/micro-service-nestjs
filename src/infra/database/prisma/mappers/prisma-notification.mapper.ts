import { Content } from '@application/entities';
import { Notification } from '@application/entities/notification.entity';
import { Notification as RawNotification } from '@prisma/client';
export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      createdAt: notification.createdAt,
      readAt: notification.readAt,
    };
  }
  static toDomain(raw: RawNotification) {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        canceledAt: raw.canceledAt,
        readAt: raw.readAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
