import { createExpressServer } from 'routing-controllers';
import { GamesController } from './controllers/games.controller';

import { LogRequestMiddleware } from './shared/middlewares/log.middleware';

createExpressServer({
  controllers: [GamesController],
  middlewares: [LogRequestMiddleware]
})
.listen(3000);

