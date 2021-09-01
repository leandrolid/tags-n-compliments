import { Request, Response } from 'express';
import { GetUserListService } from '@services/GetUserListService';

class GetUserListController {
  async handle(request: Request, response: Response) {
    const getUserListService = new GetUserListService();

    const users = await getUserListService.execute();

    return response.json({ users });
  }
}

export { GetUserListController };
