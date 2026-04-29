import type { DataSource } from './types.js';
/**
 * 创建 Express 应用
 * @param projectRoot 用户小说项目的根目录
 * @param ds 可选数据源，由 startServer 注入
 */
export declare function createApp(projectRoot: string, ds?: DataSource): import("express-serve-static-core").Express;
/**
 * 启动服务器
 */
export declare function startServer(projectRoot: string, port: number): Promise<import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>>;
//# sourceMappingURL=index.d.ts.map