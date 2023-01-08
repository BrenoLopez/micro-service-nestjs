import { Module } from '@nestjs/common';
import { NotificationRepository } from '@application/repositories/notification.repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notification.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: NotificationRepository,
      useFactory: (prismaService: PrismaService) =>
        new PrismaNotificationRepository(prismaService),
      inject: [PrismaService],
    },
    PrismaService,
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
