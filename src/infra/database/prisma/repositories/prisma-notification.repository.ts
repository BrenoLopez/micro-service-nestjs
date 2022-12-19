import { Notification } from 'src/application/entidades/notification.entity';
import { NotificationRepository } from 'src/application/repositories/notification.repository';
import { PrismaService } from '../prisma.service';

export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
      },
    });
  }
}
