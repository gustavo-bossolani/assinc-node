import 'reflect-metadata';

import { Response } from 'express';

import { BodyParam, Controller, Get, Post, Res } from 'routing-controllers';
import { KafkaConnection } from '../config/kafka/config-kafka';

@Controller('/games')
export class GamesController {

  private games = ['Silent Hill 2', 'Alan Wake', 'Dark Souls'];

  @Get('')
  getAll() {
    return { games: this.games };
  }

  @Post()
  async postNewGame(@BodyParam('game') game: string, @Res() response: Response) {
    const producer = KafkaConnection.producer();

    try {
      await producer.connect();

      await producer.send({
        topic: 'test-topic',
        messages: [
          { value: game }
        ]
      });
      await producer.disconnect();

      this.games.push(game);

      return response.status(200)
        .json({ sucess: { message: `Game postado com sucesso: [Game]:[${game}]` } });

    } catch (e) {
      console.log(e);
      return response.status(500).send({ error: 'Erro interno.' });
    }

  }

}