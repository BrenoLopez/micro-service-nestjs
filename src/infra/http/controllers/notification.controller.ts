import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBodyDto } from '../dtos/create-notification-body.dto';
import { SendNotification } from 'src/application/use-cases/send-notification.use-case';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly sendNotification: SendNotification) {}
  @Post()
  async create(
    @Body() { recipientId, content, category }: CreateNotificationBodyDto,
  ) {
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });
    return { notification };
  }
}
