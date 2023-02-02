import { IFooterItem } from './footer';

export interface IOtherPaymentsItem extends Pick<IFooterItem, 'iconName'> {
    title: string;
}