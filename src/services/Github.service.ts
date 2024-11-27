import axios from 'axios';
import dotenv from 'dotenv';

import { GITHUB_PATHS } from '../consts';
import { GitApiRepoError, GitApiProfileError } from '../middleware';

dotenv.config();

export const GithubService = () => {
    const API_KEY = process.env.GITHUB_API_KEY || '';
    const client = axios.create({ baseURL: GITHUB_PATHS.baseUrl });
    const headers = { 'Authorization': `Bearer ${API_KEY}` };
    const params = { sort: 'created', direction: 'des' };

    const getGithubProfile = async (username: string) => {
        try {
            const _path = GITHUB_PATHS.userPath.replace(':username', username);
            const profile = client.get(_path, { headers });
            return profile;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new GitApiProfileError(error.status);
            }
            throw new Error();
        }
    };

    const getGithubRepos = async (username: string) => {
        try {
            const _path = GITHUB_PATHS.reposPath.replace(':username', username);
            const repos = await client.get(_path, { headers, params });
            return repos;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new GitApiRepoError(error.status);
            }
            throw new Error();
        }
    };

    return { getGithubProfile, getGithubRepos };
};