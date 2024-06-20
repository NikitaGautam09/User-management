"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const block_schema_1 = require("./schemas/block.schema");
let BlockService = class BlockService {
    constructor(blockModel) {
        this.blockModel = blockModel;
    }
    async blockUser(userId, blockedUserId) {
        const newBlock = new this.blockModel({ userId, blockedUserId });
        return newBlock.save();
    }
    async unblockUser(userId, blockedUserId) {
        const block = await this.blockModel.findOneAndDelete({ userId, blockedUserId }).exec();
        if (!block) {
            throw new common_1.NotFoundException('Block relationship not found');
        }
        return block;
    }
    async getBlockedUsers(userId) {
        const blocks = await this.blockModel.find({ userId }).exec();
        return blocks.map(block => block.blockedUserId.toString());
    }
};
exports.BlockService = BlockService;
exports.BlockService = BlockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(block_schema_1.Block.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlockService);
//# sourceMappingURL=block.service.js.map