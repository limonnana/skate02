export interface IPictureDTO {
  login?: string;
  picture?: string;
}

export class PictureDTO implements IPictureDTO {
  constructor(public login?: string, public picture?: string) {}
}
