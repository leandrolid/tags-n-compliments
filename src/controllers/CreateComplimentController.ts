import { Request, Response } from 'express';
import { CreateComplimentService } from '@services/CreateComplimentService';

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { userReceiver, tagId, message } = request.body;
    const { userId } = request.headers;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      userReceiver,
      userSender: String(userId),
      tagId,
      message,
    });

    return response.json({ compliment });
  }
}

export { CreateComplimentController };
