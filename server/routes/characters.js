import { Router } from 'express';
export function createCharactersRouter(ds) {
    const router = Router({ mergeParams: true });
    // GET /api/stories/:story/characters?vol=X
    router.get('/', async (req, res) => {
        try {
            const vol = req.query.vol ? parseInt(req.query.vol, 10) : undefined;
            const characters = await ds.getCharacters(req.params.story, vol);
            res.json(characters);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    // GET /api/stories/:story/characters/:name/arc
    router.get('/:name/arc', async (req, res) => {
        try {
            const arc = await ds.getCharacterArc(req.params.story, decodeURIComponent(req.params.name));
            res.json(arc);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    return router;
}
//# sourceMappingURL=characters.js.map