export interface IStyleCss {
  id?: string;
  width?: string;
}

export class StyleCss implements IStyleCss {
  constructor(public id?: string, public width?: string) {}
}
