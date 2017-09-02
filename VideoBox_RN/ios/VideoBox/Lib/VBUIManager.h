//
//  VBUIManager.h
//  VideoBox
//
//  Created by SML on 2017/8/23.
//  Copyright © 2017年 sml2. All rights reserved.
//

#import <UIKit/UIKit.h>

#if TARGET_IPHONE_SIMULATOR
#define DLSimulator 1
#else
#define DLSimulator 0
#endif

#define WINDOW_FRAME   [UIApplication sharedApplication].keyWindow.frame
#define SCREEN_WIDTH   [UIScreen mainScreen].bounds.size.width
#define SCREEN_HEIGHT  [UIScreen mainScreen].bounds.size.height
#define SCREEN_SCALE   [UIScreen mainScreen].scale

@interface VBUIManager : NSObject

+ (UIColor *)colorFromHexString:(NSString *)hexString;

@end
