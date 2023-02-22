import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications.use-case';

describe('Count Notifications by recipient', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );
    for (let i = 1; i <= 2; i++) {
      await notificationRepository.create(
        makeNotification({ recipientId: 'recipient_1' }),
      );
    }
    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient_1',
    });
    expect(count).toEqual(2);
  });
});
