import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNotificationBodyDto } from '../dtos/create-notification-body.dto';
import { SendNotification } from '@application/use-cases/send-notification.use-case';
import { NotificationViewModel } from '../view-models/notification.view-model';
import { CancelNotification } from '@application/use-cases/cancel-notification.use-case';
import { ReadNotification } from '@application/use-cases/read-notification.use-case';
import { UnreadNotification } from '@application/use-cases/unread-notification.use-case';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications.use-case';
import { GetRecipientNotifications } from '@application/use-cases/get-notifications.use-case';

@Controller('notifications')
export class NotificationController {
  constructor(
    private readonly sendNotification: SendNotification,
    private readonly cancelNotification: CancelNotification,
    private readonly readNofication: ReadNotification,
    private readonly unreadNotification: UnreadNotification,
    private readonly countRecipientNotifications: CountRecipientNotifications,
    private readonly getRecipientNotifications: GetRecipientNotifications,
  ) {}
  @Post()
  async create(
    @Body() { recipientId, content, category }: CreateNotificationBodyDto,
  ) {
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });
    return { notification: NotificationViewModel.toHTTP(notification) };
  }

  @Patch(':id/cancel')
  @HttpCode(HttpStatus.NO_CONTENT)
  async cancel(@Param('id') id: string): Promise<void> {
    await this.cancelNotification.execute({ notificationId: id });
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(
    @Param('recipientId') recipientId: string,
  ): Promise<{ count: number }> {
    const count = await this.countRecipientNotifications.execute({
      recipientId,
    });
    return count;
  }

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string): Promise<{
    notifications: {
      id: string;
      content: string;
      category: string;
      recipientId: string;
    }[];
  }> {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });
    return { notifications: notifications.map(NotificationViewModel.toHTTP) };
  }

  @Patch(':id/read')
  @HttpCode(HttpStatus.NO_CONTENT)
  async read(@Param('id') id: string): Promise<void> {
    await this.readNofication.execute({ notificationId: id });
  }

  @Patch(':id/unread')
  @HttpCode(HttpStatus.NO_CONTENT)
  async unread(@Param('id') id: string): Promise<void> {
    await this.unreadNotification.execute({ notificationId: id });
  }
}
