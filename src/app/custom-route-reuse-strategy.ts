import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    // 返回 true 表示路由器应该重用组件
    // 返回 false 表示路由器应该销毁并创建新的组件
    // 可以根据需要编写自定义逻辑来判断是否重用组件
    return true;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    // 返回 null 表示不保存任何组件
    // 可以根据需要编写自定义逻辑来保存和获取组件的状态
    return null;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {}

  invalidate(): void {}
}
