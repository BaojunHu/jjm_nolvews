import { Router } from 'express';
export function createTimelineRouter(ds) {
    const router = Router({ mergeParams: true });
    // GET /api/stories/:story/timeline?vol=X
    router.get('/', async (req, res) => {
        try {
            const vol = req.query.vol ? parseInt(req.query.vol, 10) : undefined;
            const events = await ds.getTimeline(req.params.story, vol);
            res.json(events);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    return router;
}
//# sourceMappingURL=timeline.js.map