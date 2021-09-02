import { getCustomRepository } from 'typeorm';
import { ComplimentRepositories } from '@repositories/ComplimentRepositories';
class CreateComplimentService {
    constructor() {
        this.execute = async ({ userSender, userReceiver, tagId, message }) => {
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
}
export { CreateComplimentService };
