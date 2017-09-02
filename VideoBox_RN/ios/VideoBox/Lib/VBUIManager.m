//
//  VBUIManager.m
//  VideoBox
//
//  Created by SML on 2017/8/23.
//  Copyright © 2017年 sml2. All rights reserved.
//

#import "VBUIManager.h"
#import <Colours/Colours.h>

@implementation VBUIManager

+ (UIColor *)colorFromHexString:(NSString *)hexString {
    return [UIColor colorFromHexString:hexString];
}

/**
 当前设备屏幕高度和iPhone6屏幕高度的比例
 */
+ (CGFloat)magnifyFactor {
    return SCREEN_HEIGHT / 667.0;
}

/**
 当前设备屏幕宽度和iPhone6屏幕宽度比例
*/
+ (CGFloat)wMagnifyFactor {
    return SCREEN_WIDTH / 375.0;
}

@end
