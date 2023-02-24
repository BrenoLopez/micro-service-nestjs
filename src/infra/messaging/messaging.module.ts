import { Module } from '@nestjs/common';
import { NotificationController } from './kafka/controllers/notification.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [KafkaConsumerService],
})
export class MessagingModule {}
