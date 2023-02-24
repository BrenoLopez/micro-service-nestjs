import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  @EventPattern('notifications.send-notification')
  async handleSendNotification(data: Record<string, unknown>) {
    console.log(data);
  }
}
