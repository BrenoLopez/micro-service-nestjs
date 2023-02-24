import { MessagingModule } from './infra/messaging/messaging.module';
import { HttpModule } from './infra/http/http.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [MessagingModule, HttpModule],
})
export class AppModule {}
