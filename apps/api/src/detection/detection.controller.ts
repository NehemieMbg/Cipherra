import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { DetectionService } from './detection.service';
import { DetectionDto } from './dto/detection.dto';
import { InitiateDetectionDto } from './dto/initiate-detection.dto';
import { ApiKeyGuard } from 'src/api-key/guards/api-key.guard';

@Controller('detection')
@UseGuards(ApiKeyGuard)
export class DetectionController {
  constructor(private readonly detectionService: DetectionService) {}

  /**
   * Analyzes the given block number.
   *
   * @param {InitiateDetectionDto} body - The DTO containing the block number to analyze.
   * @returns {Promise<DetectionDto>} - The result of the detection analysis.
   */
  @Post()
  async analyze(@Body() body: InitiateDetectionDto): Promise<DetectionDto> {
    return this.detectionService.analyze(body.blockNumber, body.options);
  }
}
