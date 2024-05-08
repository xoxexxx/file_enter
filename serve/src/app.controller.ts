import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { diskStorage } from 'multer';

@Controller()
export class FileController {

  @Post("upload")
  //перехватчики
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './files',
      filename: (req, file, cb) => {
        const name = file.originalname.split(".")[0];
        const fileExtension = file.originalname.split(".").at(-1)
        const newfileName = name.split(" ").join("_")+Date.now()+ "."+fileExtension

        cb(null,newfileName)
      }
    }),
    fileFilter: (req, file, cb) => {
      cb(null, true)
    }
  }))

  @Get("/files/:filename")
  async getURLFile(@Param('filename') filename: any, @Res() res: Response) {
    res.sendFile(filename, { root: "./files" })
  }


  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const response = {
      filePath: `/upload/file/${file.filename}`
    }
     
    console.log(response)
    return response
  }

}
