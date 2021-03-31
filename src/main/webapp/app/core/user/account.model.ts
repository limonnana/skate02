export class Account {
  constructor(
    public activated: boolean,
    public authorities: string[],
    public email: string,
    public firstName: string,
    public langKey: string,
    public lastName: string,
    public phone: string,
    public login: string,
    public imageUrl: string,
    public picture: string,
    public profilePicture: string,
    public country: string
  ) {}
}
