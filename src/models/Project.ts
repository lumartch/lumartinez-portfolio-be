
export interface Project {
    archived: boolean;
    clone_url?: string;
    created_at: string;
    default_branch: string;
    full_name: string;
    git_url: string;
    html_url: string;
    id: number;
    name: string;
    source: string;
    ssh_url: string;
    svn_url?: string;
}

export interface GithubProject {
    archived: boolean;
    clone_url: string;
    created_at: string;
    default_branch: string;
    full_name: string;
    git_url: string;
    html_url: string;
    id: number;
    name: string;
    ssh_url: string;
    svn_url: string;
}

export interface GitlabProject {
    archived: boolean;
    created_at: string;
    default_branch: string;
    path_with_namespace: string;
    http_url_to_repo: string;
    web_url: string;
    id: number;
    name: string;
    ssh_url_to_repo: string;
}