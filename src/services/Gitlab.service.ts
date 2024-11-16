import axios from 'axios';

import { GITLAB_PATHS } from '../consts';

export const GitlabService = () => {
    const API_KEY = process.env.GITLAB_API_KEY || '';
    const client = axios.create({ baseURL: GITLAB_PATHS.baseUrl });
    const headers = { 'Authorization': `Bearer ${API_KEY}` };
    const params = { order_by: 'created_at', sort: 'desc' };

    const getGitlabProfile = (username: string) => {
        const _path = GITLAB_PATHS.userPath.replace(':username', username);
        return client.get(_path, { headers });
    };

    const getGitlabRepos = (username: string, archived: boolean) => {
        const _path = GITLAB_PATHS.reposPath.replace(':username', username);
        return client.get(_path, { headers, params: { ...params, archived } });
    };

    return { getGitlabProfile, getGitlabRepos };
};