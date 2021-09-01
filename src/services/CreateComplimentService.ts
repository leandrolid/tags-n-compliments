import { getCustomRepository } from 'typeorm';
import { Compliment } from '@entities/Compliment';
import { ComplimentRepositories } from '@repositories/ComplimentRepositories';

type IUserRequest = {
  userSender: string;
  userReceiver: string;
  tagId: string;
  message: string;
};

type IExecute = (userRequest: IUserRequest) => Promise<Compliment>;

class CreateComplimentService {
  execute: IExecute = async ({ userSender, userReceiver, tagId, message }) => {
    const complimentRepository = getCustomRepository(ComplimentRepositories);

    if (userSender === userReceiver) {
      throw new Error('Invalid reveiver');
    }

    if (!message) {
      throw new Error('Invalid message');
    }

    if (!tagId) {
      throw new Error('Invalid tag');
    }

    const compliment = complimentRepository.create({
      user_sender: userSender,
      user_receiver: userReceiver,
      tag_id: tagId,
      message,
    });

    await complimentRepository.save(compliment);

    return compliment;
  };
}

export { CreateComplimentService };
