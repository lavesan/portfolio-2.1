export interface IContactCard extends IStyledContactCard {
    icon: any;
    href: string;
    text?: string;
    onClick?: VoidFunction;
}

export interface IStyledContactCard {
    backgroundColor: string;
}
