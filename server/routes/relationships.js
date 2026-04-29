import { Router } from 'express';
export function createRelationshipsRouter(ds) {
    const router = Router({ mergeParams: true });
    // GET /api/stories/:story/relationships?vol=X
    router.get('/', async (req, res) => {
        try {
            const vol = req.query.vol ? parseInt(req.query.vol, 10) : undefined;
            const graph = await ds.getRelationships(req.params.story, vol);
            res.json(graph);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    // GET /api/stories/:story/relationships/history
    router.get('/history', async (req, res) => {
        try {
            const history = await ds.getRelationshipHistory(req.params.story);
            res.json(history);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    return router;
}
//# sourceMappingURL=relationships.js.map