import path from 'path';
import fs from 'fs-extra';
import { FsDataSource } from './fs.js';
/**
 * 创建数据源实例
 * 读取项目 config.json，根据 database.enabled 选择 DB 或 FS 数据源
 * DB 连接失败时自动降级到 FS
 */
export async function createDataSource(projectRoot) {
    const configPath = path.join(projectRoot, 'resources', 'config.json');
    let dbConfig;
    try {
        const config = await fs.readJson(configPath);
        dbConfig = config.database;
    }
    catch {
        // config.json 不存在或解析失败，使用 FS
    }
    if (dbConfig?.enabled) {
        try {
            const { DbDataSource } = await import('./db.js');
            const dbDs = new DbDataSource(dbConfig, projectRoot);
            await dbDs.connect();
            return Object.assign(dbDs, { type: 'db' });
        }
        catch (err) {
            console.warn('⚠️  数据库连接失败，降级到文件系统数据源:', err.message);
        }
    }
    const fsDs = new FsDataSource(projectRoot);
    return Object.assign(fsDs, { type: 'fs' });
}
//# sourceMappingURL=index.js.map