import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/application/repositories/notification.repository';
import { SendNotification } from 'src/application/use-cases/send-notification.use-case';
import { DatabaseModule } from '../database/database.module';
import { NotificationController } from './controllers/notification.controller';

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
  ],
})
export class HttpModule {}