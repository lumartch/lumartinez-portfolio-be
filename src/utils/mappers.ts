import { GitSource } from '../enums';
import { GitApiProfileError } from '../middleware';
import { GithubProfile, GithubProject, GitlabProfile, GitlabProject, Profile, Project } from '../models';

export const ProfileMapper = {
    fromGithubToProfile (profile: GithubProfile): Profile {
        return {
            avatar_uri: profile.avatar_url,
            bio: profile.bio,
            email: profile.email,
            git_uri: profile.html_url,
            name: profile.name,
            user_id: profile.id,
            username: profile.login,
        };
    },
    fromGitlabToProfile (profile: GitlabProfile): Profile {
        if (!profile) {
            throw new GitApiProfileError(404);
        }
        return {
            avatar_uri: profile.avatar_url,
            email: profile.email,
            git_uri: profile.web_url,
            name: profile.name,
            user_id: profile.id,
            username: profile.username,
        };
    }
};

export const ProjectMapper = {
    fromGithubToProject (project: GithubProject): Project {
        return {
            archived: project.archived,
            clone_url: project.clone_url,
            created_at: project.created_at,
            default_branch: project.default_branch,
            full_name: project.full_name,
            git_url: project.git_url,
            html_url: project.html_url,
            id: project.id,
            name: project.name,
            source: GitSource.GITHUB,
            ssh_url: project.ssh_url,
            svn_url: project.svn_url,
        };
    },
    fromGitlabToProject (project: GitlabProject): Project {
        return {
            archived: project.archived,
            created_at: project.created_at,
            default_branch: project.default_branch,
            full_name: project.path_with_namespace,
            git_url: project.http_url_to_repo,
            html_url: project.web_url,
            id: project.id,
            name: project.name,
            source: GitSource.GITLAB,
            ssh_url: project.ssh_url_to_repo,
        };
    }
};