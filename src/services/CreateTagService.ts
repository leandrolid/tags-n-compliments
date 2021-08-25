import { getCustomRepository } from 'typeorm';
import { TagRepositories } from '@repositories/TagRepositories';

type IUserRequest = {
  name: string,
}

class CreateTagService {
  async execute({ name }: IUserRequest) {
    const tagRepository = getCustomRepository(TagRepositories);
    
    if (!name) {
      throw new Error("Invalid tag name");
    }

    const userAlreadyExists = await tagRepository.findOne({ name });

    if (userAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const newTag = tagRepository.create({
      name
    });

    await tagRepository.save(newTag);

    return newTag;

  }
}

export { CreateTagService };
