import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Investments project')
  .setDescription('Investments project API description')
  .setVersion('1.0')
  .addTag('investments')
  .build();

export { swaggerConfig };
