import axios from 'axios';

import { GITHUB_PATHS } from '../consts';

export const GithubService = () => {
    const API_KEY = process.env.GITHUB_API_KEY || '';
    const client = axios.create({ baseURL: GITHUB_PATHS.baseUrl });
    const headers = { 'Authorization': `Bearer ${API_KEY}` };
    const params = { sort: 'created', direction: 'des' };

    const getGithubProfile = (username: string) => {
        const _path = GITHUB_PATHS.userPath.replace(':username', username);
        return client.get(_path, { headers });
    };

    const getGithubRepos = (username: string) => {
        const _path = GITHUB_PATHS.reposPath.replace(':username', username);
        return client.get(_path, { headers, params });
    };

    return { getGithubProfile, getGithubRepos };
};