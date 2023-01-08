import { Content } from '../entities/content.entity';
import { Notification } from '../entities/notification.entity';
import { NotificationRepository } from '../repositories/notification.repository';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}
export class SendNotification {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}
  async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });
    await this.notificationRepository.create(notification);
    return { notification };
  }
}
