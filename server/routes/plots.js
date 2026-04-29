import { Router } from 'express';
export function createPlotsRouter(ds) {
    const router = Router({ mergeParams: true });
    // GET /api/stories/:story/plots
    router.get('/plots', async (req, res) => {
        try {
            const plots = await ds.getPlotThreads(req.params.story);
            res.json(plots);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    // GET /api/stories/:story/foreshadowing
    router.get('/foreshadowing', async (req, res) => {
        try {
            const items = await ds.getForeshadowing(req.params.story);
            res.json(items);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    // GET /api/stories/:story/foreshadowing/matrix
    router.get('/foreshadowing/matrix', async (req, res) => {
        try {
            const matrix = await ds.getForeshadowingMatrix(req.params.story);
            res.json(matrix);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    return router;
}
//# sourceMappingURL=plots.js.map