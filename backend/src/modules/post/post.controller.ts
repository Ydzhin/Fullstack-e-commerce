import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {PostService} from "./post.service";
import {PostDto} from "./dto/PostDto";

@Controller('/post/')
export class PostController {
    constructor(private readonly postRepository: PostService) {}

    @Post(`/create`)
    create(@Body() postDto: PostDto) {
        return this.postRepository.create(postDto);
    }

    @Get(`/get_all`)
    getAll() {
        return this.postRepository.getAll();
    }

    @Get(`/get_by_userId/:userId`)
    getById(@Param('userId') userId: number) {
        return this.postRepository.getByUserId(userId);
    }

    @Delete(`/delete/:id`)
    delete(@Param('id') id: number) {
        return this.postRepository.delete(id);
    }

    @Put(`/edit/:id`)
    edit(@Param('id') id: number, @Body() postDto: PostDto) {
        return this.postRepository.edit(id, postDto);
    }
}
