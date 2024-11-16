import { GitSource } from '../enums';
import { GithubService } from './Github.service';
import { GitlabService } from './Gitlab.service';

export const RepoService = () => {
    const { getGithubRepos } = GithubService();
    const { getGitlabRepos } = GitlabService();

    const getRepos = async (username: string, gitSource: GitSource, archived: boolean) => {
        try {
            if (gitSource === GitSource.GITHUB) {
                return await getGithubRepos(username);
            }
            return await getGitlabRepos(username, archived);
        } catch {
            throw new Error();
        }
    };

    return { getRepos };
};