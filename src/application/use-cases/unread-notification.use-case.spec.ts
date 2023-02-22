import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { ReadNotification } from './read-notification.use-case';
import { UnreadNotification } from './unread-notification.use-case';

describe('Unread Notification', () => {
  it('should be able to unread notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationRepository);
    const notification = makeNotification({ readAt: new Date() });
    await notificationRepository.create(notification);
    await unreadNotification.execute({ notificationId: notification.id });
    expect(notificationRepository.notifications[0].readAt).toBeNull();
  });

  //   it('should not be able to read a non existing notification', async () => {
  //     const notificationRepository = new InMemoryNotificationRepository();
  //     const readNotification = new ReadNotification(notificationRepository);

  //     expect(() => {
  //       return readNotification.execute({
  //         notificationId: 'any_notification_id',
  //       });
  //     }).rejects.toThrow(NotificationNotFound);
  //   });
});
