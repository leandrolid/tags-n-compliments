import { GetUserListService } from '@services/GetUserListService';
class GetUserListController {
    async handle(request, response) {
        const getUserListService = new GetUserListService();
        const users = await getUserListService.execute();
        return response.json({ users });
    }
}
export { GetUserListController };
