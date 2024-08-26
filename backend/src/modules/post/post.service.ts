import {Injectable, Post} from '@nestjs/common';
import {PostDto} from "./dto/PostDto";
import {InjectModel} from "@nestjs/sequelize";
import {Posts} from "./posts.model";

@Injectable()
export class PostService {
    constructor(@InjectModel(Posts) private readonly postsModel: typeof Posts) {
    }

    async create(dto: PostDto) {
        const post = await this.postsModel.create(dto);

        return post;
    }

    async getAll() {
        const posts = await this.postsModel.findAll({include: {all: true}});

        return posts;
    }

    async getByUserId(userId: number) {
        const post = await this.postsModel.findAll({where: {userId: userId}});

        return post;
    }

    async delete(postId: number) {
        const post = await this.postsModel.findOne({where: {id: postId}});

        await post.destroy();

        return 'ok';
    }

    async edit(postId: number, dto: PostDto) {
        const post = await this.postsModel.findOne({where: {id: postId}});

        await post.update({
            title: dto.title,
            description: dto.description,
        });

        return post;
    }
}
