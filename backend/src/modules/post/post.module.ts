import {Module} from '@nestjs/common';
import {PostController} from "./post.controller";
import {PostService} from "./post.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Posts} from "./posts.model";

@Module({
    controllers: [PostController],
    providers: [PostService],

    imports: [SequelizeModule.forFeature([Posts])],
})
export class PostModule {}
