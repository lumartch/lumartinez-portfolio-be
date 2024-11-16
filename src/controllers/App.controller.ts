import { Request, Response, Router } from 'express';
import { matchedData, query, validationResult } from 'express-validator';

import { API_PATHS } from '../consts';
import { ProfileService, RepoService } from '../services';


export const AppController = () => {
    const controller = Router();
    const { getProfile } = ProfileService();
    const { getRepos } = RepoService();

    controller.get(`/:username${API_PATHS.infoPath}`, query('git_source').notEmpty(), async (req: Request, res: Response) => {
        const _validateRequest = validationResult(req);
        if (!_validateRequest.isEmpty()) {
            res.send({ errors: _validateRequest.array() });
            return;
        }
        const { git_source } = matchedData(req);
        const { username } = req.params;

        const { data } = await getProfile(username, git_source);
        res.status(200).send(data);
    });

    controller.get(`/:username${API_PATHS.reposPath}`, [query(['git_source']).notEmpty(), query('archived').notEmpty().isBoolean()], async (req: Request, res: Response) => {
        const _validateRequest = validationResult(req);
        if (!_validateRequest.isEmpty()) {
            res.send({ errors: _validateRequest.array() });
            return;
        }
        const { git_source, archived } = matchedData(req);
        const { username } = req.params;

        const { data } = await getRepos(username, git_source, archived);
        res.status(200).send(data);
    });

    return { controller };
};
