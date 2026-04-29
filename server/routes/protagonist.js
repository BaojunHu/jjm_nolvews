import { Router } from 'express';
export function createProtagonistRouter(ds) {
    const router = Router({ mergeParams: true });
    // GET /api/stories/:story/protagonist/overview
    router.get('/overview', async (req, res) => {
        try {
            const data = await ds.getProtagonistOverview(req.params.story);
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    // GET /api/stories/:story/protagonist/skills
    router.get('/skills', async (req, res) => {
        try {
            const data = await ds.getProtagonistSkills(req.params.story);
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    // GET /api/stories/:story/protagonist/inventory
    router.get('/inventory', async (req, res) => {
        try {
            const data = await ds.getProtagonistInventory(req.params.story);
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    // GET /api/stories/:story/protagonist/cultivation
    router.get('/cultivation', async (req, res) => {
        try {
            const data = await ds.getCultivationCurve(req.params.story);
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    return router;
}
//# sourceMappingURL=protagonist.js.map