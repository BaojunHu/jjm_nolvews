import type { DataSource } from '../types.js';
export interface DataSourceWithType extends DataSource {
    type: 'fs' | 'db';
}
/**
 * 创建数据源实例
 * 读取项目 config.json，根据 database.enabled 选择 DB 或 FS 数据源
 * DB 连接失败时自动降级到 FS
 */
export declare function createDataSource(projectRoot: string): Promise<DataSourceWithType>;
//# sourceMappingURL=index.d.ts.map