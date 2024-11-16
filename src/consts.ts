import { Api, GitApi } from './models';

export const GITHUB_PATHS: GitApi = {
    baseUrl: 'https://api.github.com',
    userPath: '/users/:username',
    reposPath: '/users/:username/repos',
};

export const GITLAB_PATHS: GitApi = {
    baseUrl: 'https://gitlab.com/api/v4',
    userPath: '/users',
    reposPath: '/users/:username/projects',
};

export const API_PATHS: Api = {
    baseUrl: '/api/v1/user',
    infoPath: '/info',
    reposPath: '/repos',
};