import type { DataSource, Story, StoryOverview, Volume, Chapter, Character, CharacterState, RelationshipGraph, RelationshipEvent, TimelineEvent, PlotThread, Foreshadow, ForeshadowMatrix, DashboardStats, ProtagonistOverview, ProtagonistSkill, ProtagonistItem, CultivationNode } from '../types.js';
interface DbConfig {
    host: string;
    port: number;
    dbname: string;
    user: string;
    password: string;
    schema: string;
}
export declare class DbDataSource implements DataSource {
    private config;
    private projectRoot;
    private client;
    private schema;
    constructor(config: DbConfig, projectRoot: string);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    private query;
    getStories(): Promise<Story[]>;
    getOverview(_story: string): Promise<StoryOverview>;
    getVolumes(_story: string): Promise<Volume[]>;
    getChapters(_story: string, vol?: number): Promise<Chapter[]>;
    getCharacters(_story: string, vol?: number): Promise<Character[]>;
    getCharacterArc(_story: string, name: string): Promise<CharacterState[]>;
    getRelationships(_story: string, _vol?: number): Promise<RelationshipGraph>;
    getRelationshipHistory(_story: string): Promise<RelationshipEvent[]>;
    getTimeline(_story: string, vol?: number): Promise<TimelineEvent[]>;
    getPlotThreads(_story: string): Promise<PlotThread[]>;
    getForeshadowing(_story: string): Promise<Foreshadow[]>;
    getForeshadowingMatrix(_story: string): Promise<ForeshadowMatrix>;
    getDashboardStats(_story: string): Promise<DashboardStats>;
    getProtagonistOverview(_story: string): Promise<ProtagonistOverview>;
    getProtagonistSkills(_story: string): Promise<ProtagonistSkill[]>;
    getProtagonistInventory(_story: string): Promise<ProtagonistItem[]>;
    getCultivationCurve(_story: string): Promise<CultivationNode[]>;
}
export {};
//# sourceMappingURL=db.d.ts.map