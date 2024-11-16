import { GitSource } from '../enums';
import { GithubService } from './Github.service';
import { GitlabService } from './Gitlab.service';

export const ProfileService = () => {
    const { getGithubProfile } = GithubService();
    const { getGitlabProfile } = GitlabService();

    const getProfile = async (username: string, gitSource: GitSource) => {
        try {
            if (gitSource === GitSource.GITHUB) {
                return await getGithubProfile(username);
            }
            return await getGitlabProfile(username);
        } catch {
            throw new Error();
        }
    };

    return { getProfile };
};