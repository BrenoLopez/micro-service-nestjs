import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-notifications.use-case';

describe('Find many notifications by recipient', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getrecipientNotificaitons = new GetRecipientNotifications(
      notificationRepository,
    );
    const recipientId = 'recipient_1';
    for (let i = 1; i <= 2; i++) {
      await notificationRepository.create(makeNotification({ recipientId }));
    }
    const { notifications } = await getrecipientNotificaitons.execute({
      recipientId,
    });
    console.log(notifications);
    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId }),
        expect.objectContaining({ recipientId }),
      ]),
    );
  });
});
