import { NotificationRepository } from '../repositories/notification.repository';
import { NotificationNotFound } from './errors/notification-not-found.error';

interface IReadNotificationRequest {
  notificationId: string;
}

type IReadNotificationResponse = void;
export class ReadNotification {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}
  async execute(
    request: IReadNotificationRequest,
  ): Promise<IReadNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationRepository.findById(
      notificationId,
    );
    if (!notification) throw new NotificationNotFound();
    notification.read();
    await this.notificationRepository.save(notification);
  }
}
