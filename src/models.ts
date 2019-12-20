export interface IConfig {
  path: string;
  component: () => void;
  redirect?: string;
  exact: boolean;
  canActivate: Array<Promise<Function>>
}
