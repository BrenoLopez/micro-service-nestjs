import { NotificationRepository } from '../repositories/notification.repository';
import { NotificationNotFound } from './errors/notification-not-found.error';

interface IUnreadNotificationRequest {
  notificationId: string;
}

type IUnreadNotificationResponse = void;
export class UnreadNotification {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}
  async execute(
    request: IUnreadNotificationRequest,
  ): Promise<IUnreadNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationRepository.findById(
      notificationId,
    );
    if (!notification) throw new NotificationNotFound();
    notification.unread();
    await this.notificationRepository.save(notification);
  }
}
