export interface Profile {
    avatar_uri: string;
    bio?: string;
    email: string;
    git_uri: string;
    name: string;
    user_id: number;
    username: string;
}

export interface GithubProfile {
    avatar_url: string;
    bio: string;
    email: string;
    html_url: string;
    name: string;
    id: number;
    login: string;
}

export interface GitlabProfile {
    avatar_url: string;
    email: string;
    web_url: string;
    name: string;
    id: number;
    username: string;
}