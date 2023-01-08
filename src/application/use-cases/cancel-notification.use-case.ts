import { NotificationRepository } from '../repositories/notification.repository';
import { NotificationNotFound } from './errors/notification-not-found.error';

interface ICancelNotificationRequest {
  notificationId: string;
}

type ICancelNotificationResponse = void;
export class CancelNotification {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}
  async execute(
    request: ICancelNotificationRequest,
  ): Promise<ICancelNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationRepository.findById(
      notificationId,
    );
    if (!notification) throw new NotificationNotFound();
    notification.cancel();
    await this.notificationRepository.save(notification);
  }
}
