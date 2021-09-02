var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Tag } from './Tag';
import { User } from './User';
let Compliment = class Compliment {
    constructor() {
        if (!this.id)
            this.id = uuidv4();
    }
};
__decorate([
    PrimaryColumn(),
    __metadata("design:type", String)
], Compliment.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Compliment.prototype, "user_sender", void 0);
__decorate([
    JoinColumn({ name: 'user_sender' }),
    ManyToOne(() => User),
    __metadata("design:type", User)
], Compliment.prototype, "userSender", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Compliment.prototype, "user_receiver", void 0);
__decorate([
    JoinColumn({ name: 'user_receiver' }),
    ManyToOne(() => User),
    __metadata("design:type", User)
], Compliment.prototype, "userReceiver", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Compliment.prototype, "tag_id", void 0);
__decorate([
    JoinColumn({ name: 'tag_id' }),
    ManyToOne(() => Tag),
    __metadata("design:type", Tag)
], Compliment.prototype, "tag", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Compliment.prototype, "message", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Compliment.prototype, "created_at", void 0);
Compliment = __decorate([
    Entity('compliments'),
    __metadata("design:paramtypes", [])
], Compliment);
export { Compliment };
