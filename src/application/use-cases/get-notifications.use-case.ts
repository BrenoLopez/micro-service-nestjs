import { NotificationRepository } from '../repositories/notification.repository';
import { Notification } from '../entities';
interface IGetRecipientNotificationsRequest {
  recipientId: string;
}

interface IGetRecipientNotificationsResponse {
  notifications: Notification[];
}
export class GetRecipientNotifications {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}
  async execute(
    request: IGetRecipientNotificationsRequest,
  ): Promise<IGetRecipientNotificationsResponse> {
    const { recipientId } = request;
    const notifications =
      await this.notificationRepository.findManyByRecipientId(recipientId);
    return { notifications };
  }
}
