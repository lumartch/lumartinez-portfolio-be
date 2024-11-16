

import { GitSource } from '../enums';
import { ProfileMapper } from '../utils';
import { GithubService } from './Github.service';
import { GitlabService } from './Gitlab.service';

export const ProfileService = () => {
    const { getGithubProfile } = GithubService();
    const { getGitlabProfile } = GitlabService();

    const getProfile = async (username: string, gitSource: GitSource) => {
        if (gitSource === GitSource.GITHUB) {
            const { data } = await getGithubProfile(username);
            return ProfileMapper.fromGithubToProfile(data);
        }
        const { data } = await getGitlabProfile(username);
        return ProfileMapper.fromGitlabToProfile(data[0]);
    };

    return { getProfile };
};