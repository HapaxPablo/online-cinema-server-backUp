/// <reference types="multer" />
import { FileResponse } from './dto/files.response';
export declare class FilesService {
    saveFiles(files: Express.Multer.File[], folder?: string): Promise<FileResponse[]>;
}
