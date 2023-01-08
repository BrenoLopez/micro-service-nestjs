import { Notification } from '@application/entities/notification.entity';
import { NotificationRepository } from '@application/repositories/notification.repository';
import { PrismaNotificationMapper } from '../mappers/prisma-notification.mapper';
import { PrismaService } from '../prisma.service';

export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private readonly prismaService: PrismaService) {}

  save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findById(notificationId: string): Promise<Notification | null> {
    // const notification = await this.prismaService.notification.findFirst({
    //   where: { id: notificationId },
    // });
    // return notification;
    return null;
  }
  findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    throw new Error('Method not implemented.');
  }
  countManyByRecipientId(recipientId: string): Promise<number> {
    throw new Error('Method not implemented.');
  }
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
