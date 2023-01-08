import { NotificationRepository } from '../repositories/notification.repository';

interface ICountRecipientNotificationsRequest {
  recipientId: string;
}

interface ICountRecipientNotificationsResponse {
  count: number;
}
export class CountRecipientNotifications {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}
  async execute(
    request: ICountRecipientNotificationsRequest,
  ): Promise<ICountRecipientNotificationsResponse> {
    const { recipientId } = request;
    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );
    return { count };
  }
}
