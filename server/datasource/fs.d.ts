import type { DataSource, Story, StoryOverview, Volume, Chapter, Character, CharacterState, RelationshipGraph, RelationshipEvent, TimelineEvent, PlotThread, Foreshadow, ForeshadowMatrix, DashboardStats, ProtagonistOverview, ProtagonistSkill, ProtagonistItem, CultivationNode } from '../types.js';
export declare class FsDataSource implements DataSource {
    projectRoot: string;
    constructor(projectRoot: string);
    private storiesDir;
    private storyDir;
    private volumeDir;
    getStories(): Promise<Story[]>;
    getOverview(story: string): Promise<StoryOverview>;
    getVolumes(story: string): Promise<Volume[]>;
    getChapters(story: string, vol?: number): Promise<Chapter[]>;
    private findLatestVolume;
    private trackingDir;
    private readTrackingJson;
    private collectFromAllVolumes;
    getCharacters(story: string, vol?: number): Promise<Character[]>;
    getCharacterArc(story: string, name: string): Promise<CharacterState[]>;
    getRelationships(story: string, vol?: number): Promise<RelationshipGraph>;
    getRelationshipHistory(_story: string): Promise<RelationshipEvent[]>;
    getTimeline(story: string, vol?: number): Promise<TimelineEvent[]>;
    getPlotThreads(story: string): Promise<PlotThread[]>;
    getForeshadowing(story: string): Promise<Foreshadow[]>;
    getForeshadowingMatrix(_story: string): Promise<ForeshadowMatrix>;
    getDashboardStats(story: string): Promise<DashboardStats>;
    getProtagonistOverview(_story: string): Promise<ProtagonistOverview>;
    getProtagonistSkills(_story: string): Promise<ProtagonistSkill[]>;
    getProtagonistInventory(_story: string): Promise<ProtagonistItem[]>;
    getCultivationCurve(_story: string): Promise<CultivationNode[]>;
}
//# sourceMappingURL=fs.d.ts.map