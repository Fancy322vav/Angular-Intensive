import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';

export const weekendGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);

  const bypassParam = route.queryParamMap.get('bypass');
  if (bypassParam === 'true') {
    return true;
  }

  const today = new Date();
  const dayOfWeek = today.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  if (isWeekend) {
    return true;
  }

  alert('Weekend Party page is only accessible during weekends.');
  return router.createUrlTree(['/home']);
};
