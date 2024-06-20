import { BlockService } from './block.service';
export declare class BlockController {
    private readonly blockService;
    constructor(blockService: BlockService);
    blockUser(body: {
        userId: string;
        blockedUserId: string;
    }): Promise<import("./schemas/block.schema").Block>;
    unblockUser(body: {
        userId: string;
        blockedUserId: string;
    }): Promise<import("./schemas/block.schema").Block>;
}
