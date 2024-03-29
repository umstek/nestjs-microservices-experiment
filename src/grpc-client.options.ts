import { join } from 'path';

import { ClientOptions, Transport } from '@nestjs/microservices';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: join(__dirname, './hero/hero.proto'),
    url: '127.0.0.1:50051',
  },
};
