"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyAdminGuard = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("../../user/user.model");
class OnlyAdminGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user.isAdmin)
            throw new common_1.ForbiddenException('You have not admin rules');
        return user.isAdmin;
    }
}
exports.OnlyAdminGuard = OnlyAdminGuard;
//# sourceMappingURL=admin.guard.js.map