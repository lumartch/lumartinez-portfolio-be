import axios from 'axios';
import dotenv from 'dotenv';

import { GITLAB_PATHS } from '../consts';
import { GitApiRepoError, GitApiProfileError } from '../middleware';

dotenv.config();

export const GitlabService = () => {
    const API_KEY = process.env.GITLAB_API_KEY || '';
    const client = axios.create({ baseURL: GITLAB_PATHS.baseUrl });
    const headers = { 'Authorization': `Bearer ${API_KEY}` };
    const params = { order_by: 'created_at', sort: 'desc' };

    const getGitlabProfile = async (username: string) => {
        try {
            const profile = await client.get(GITLAB_PATHS.userPath, { headers, params: { username } });
            return profile;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new GitApiProfileError(error.status);
            }
            throw new Error();
        }
    };

    const getGitlabRepos = async (username: string, archived: boolean) => {
        try {
            const _path = GITLAB_PATHS.reposPath.replace(':username', username);
            const repos = await client.get(_path, { headers, params: { archived, ...params } });
            return repos;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new GitApiRepoError(error.status);
            }
            throw new Error();
        }
    };

    return { getGitlabProfile, getGitlabRepos };
};