import { randomUUID } from 'crypto';
import { Content } from './content.entity';
import { Notification } from './notification.entity';
describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Any Content'),
      category: 'any_category',
      recipientId: randomUUID(),
    });
    expect(notification).toBeTruthy();
  });
});
