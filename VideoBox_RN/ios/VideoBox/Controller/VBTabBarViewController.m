//
//  VBTabBarViewController.m
//  VideoBox
//
//  Created by SML on 2017/8/23.
//  Copyright © 2017年 sml2. All rights reserved.
//

#import "VBTabBarViewController.h"
#import "VBDiscoverViewController.h"
#import "VBMineViewController.h"
#import "VBNavigationController.h"
#import "VBUIManager.h"

@interface VBTabBarViewController ()

@property (nonatomic,strong) VBDiscoverViewController *discoverVC;

@property (nonatomic,strong) VBMineViewController *mineVC;

@end

@implementation VBTabBarViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    
    [self setupTabBarItemImageForTarget:self.discoverVC normalImage:@"discover_gray" selectedImage:@"discover_green"];
    [self addChildViewController:[[VBNavigationController alloc] initWithRootViewController:self.discoverVC]];
    
    [self setupTabBarItemImageForTarget:self.mineVC normalImage:@"mine_gray" selectedImage:@"mine_green"];
    [self addChildViewController:[[VBNavigationController alloc] initWithRootViewController:self.mineVC]];
}

#pragma mark - Internal Helper

- (void)setupTabBarItemImageForTarget:(UIViewController *)vc normalImage:(NSString *)normalImage selectedImage:(NSString *)selectedImage {
    vc.tabBarItem.image = [[UIImage imageNamed:normalImage] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
    vc.tabBarItem.selectedImage = [[UIImage imageNamed:selectedImage] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
    vc.tabBarItem.imageInsets = UIEdgeInsetsMake(5, 0, -5, 0);
    [vc.tabBarItem setTitleTextAttributes:@{NSForegroundColorAttributeName:[VBUIManager colorFromHexString:@"#2ac9c0"]} forState:UIControlStateSelected];}

- (VBDiscoverViewController *)discoverVC {
    if (!_discoverVC) {
        _discoverVC = [[VBDiscoverViewController alloc] init];
        _discoverVC.title = @"发现";
    }
    return _discoverVC;
}

- (VBMineViewController *)mineVC {
    if (!_mineVC) {
        _mineVC = [[VBMineViewController alloc] init];
        _mineVC.title = @"我的";
    }
    return _mineVC;
}


@end
