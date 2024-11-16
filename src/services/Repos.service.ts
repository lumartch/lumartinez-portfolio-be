import { AxiosResponse } from 'axios';

import { GitSource } from '../enums';
import { GithubProject, GitlabProject } from '../models';
import { ProjectMapper } from '../utils';
import { GithubService } from './Github.service';
import { GitlabService } from './Gitlab.service';

export const RepoService = () => {
    const { getGithubRepos } = GithubService();
    const { getGitlabRepos } = GitlabService();

    const getRepos = async (username: string, gitSource: GitSource, archived: string) => {
        const _archived = (archived === 'true');
        if (gitSource === GitSource.GITHUB) {
            const { data }: AxiosResponse<GithubProject[]> = await getGithubRepos(username);
            const _filter = data.filter((project) => project.archived === _archived);
            return _filter.map(ProjectMapper.fromGithubToProject);
        }
        const { data }: AxiosResponse<GitlabProject[]> = await getGitlabRepos(username, _archived);
        return data.map(ProjectMapper.fromGitlabToProject);
    };

    return { getRepos };
};