import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searching: string): string {
    return `'search....movies ' ${searching}`;
  }
  @Get(':id')
  getOne(@Param('id') movieid: string): string {
    return `This gona return one movie with the id: ${movieid}`;
  }

  @Post()
  create(@Body() movieData): string {
    console.log(movieData);
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch(':id')
  patchMovie(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
