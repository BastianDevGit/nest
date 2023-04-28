import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { fileFilter } from './helpers/file.Filter.helper';
import { diskStorage } from 'multer';
import { fileNamer } from './helpers/fileNamer';
import { ConfigService } from '@nestjs/config';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    
    private readonly configService: ConfigService
    ) {}

  @Post('games')
  @UseInterceptors( FileInterceptor('file', { 
    fileFilter: fileFilter,
    // limits: {  },
    storage: diskStorage({
      destination: './static/games',
      filename: fileNamer
    })
  }) )
  uploadGmaeImage( 
    @UploadedFile() file: Express.Multer.File 
    )
  {

    if ( !file ) {
      throw new BadRequestException('Make sure that the file is as image')
    }

    const secureUrl = `${ this.configService.get('HOST_API') }/files/games/${ file.filename }`

    return {
      fileName: { secureUrl }
    };

  } 

}
