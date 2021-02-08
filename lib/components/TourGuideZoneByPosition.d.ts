/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
import { BorderRadiusObject, Shape } from '../types';
interface TourGuideZoneByPositionProps {
    text:string,
    zone: number;
    isTourGuide?: boolean;
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
    width?: number | string;
    height?: number | string;
    shape?: Shape;
    borderRadiusObject?: BorderRadiusObject;
    containerStyle?: StyleProp<ViewStyle>;
    keepTooltipPosition?: boolean;
    tooltipBottomOffset?: number;
}
export declare const TourGuideZoneByPosition: ({ text,isTourGuide, zone, width, height, top, left, right, bottom, shape, containerStyle, keepTooltipPosition, tooltipBottomOffset, borderRadiusObject, }: TourGuideZoneByPositionProps) => JSX.Element | null;
export {};
