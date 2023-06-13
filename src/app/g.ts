// https://angular.io/guide/dependency-injection-navtree
// Helper method to provide the current component instance in the name of a `parentType`.
// The `parentType` defaults to `Parent` when omitting the second parameter.
import { forwardRef } from '@angular/core';
import { CComponent } from './c/c.component';

export function provideParent(component: any, parentType?: any) {
  return { provide: parentType || CComponent, useExisting: forwardRef(() => component) };
}
