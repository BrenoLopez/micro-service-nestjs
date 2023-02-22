import { Module } from '@nestjs/common';
import { NotificationRepository } from '@application/repositories/notification.repository';
import { SendNotification } from '@application/use-cases/send-notification.use-case';
import { DatabaseModule } from '../database/database.module';
import { NotificationController } from './controllers/notification.controller';
import { CancelNotification } from '@application/use-cases/cancel-notification.use-case';
import { ReadNotification } from '@application/use-cases/read-notification.use-case';
import { UnreadNotification } from '@application/use-cases/unread-notification.use-case';
import { GetRecipientNotifications } from '@application/use-cases/get-notifications.use-case';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [
    {
      provide: SendNotification,
      useFactory: (notificationRepository: NotificationRepository) => {
        return new SendNotification(notificationRepository);
      },
      inject: [NotificationRepository],
    },
    {
      provide: CancelNotification,
      useFactory: (notificationRepository: NotificationRepository) => {
        return new CancelNotification(notificationRepository);
      },
      inject: [NotificationRepository],
    },
    {
      provide: ReadNotification,
      useFactory: (notificationRepository: NotificationRepository) => {
        return new ReadNotification(notificationRepository);
      },
      inject: [NotificationRepository],
    },
    {
      provide: UnreadNotification,
      useFactory: (notificationRepository: NotificationRepository) => {
        return new UnreadNotification(notificationRepository);
      },
      inject: [NotificationRepository],
    },
    {
      provide: GetRecipientNotifications,
      useFactory: (notificationRepository: NotificationRepository) => {
        return new GetRecipientNotifications(notificationRepository);
      },
      inject: [NotificationRepository],
    },
    {
      provide: CountRecipientNotifications,
      useFactory: (notificationRepository: NotificationRepository) => {
        return new CountRecipientNotifications(notificationRepository);
      },
      inject: [NotificationRepository],
    },
  ],
})
export class HttpModule {}
