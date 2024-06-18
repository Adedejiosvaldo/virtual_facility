import { Module } from '@nestjs/common';
import { WorkflowServiceController } from './workflow-service.controller';
import { WorkflowServiceService } from './workflow-service.service';

@Module({
  imports: [],
  controllers: [WorkflowServiceController],
  providers: [WorkflowServiceService],
})
export class WorkflowServiceModule {}
