import { randomUUID } from 'crypto';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification.use-case';

describe('Send Notification', () => {
  it('should be able to send notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);
    const { notification } = await sendNotification.execute({
      content: 'any content',
      category: 'any_category',
      recipientId: randomUUID(),
    });
    expect(notificationRepository.notifications).toHaveLength(1);

    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
