import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from 'src/Services/token.service';
import { inject } from '@angular/core';

export const guestGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  tokenService.isAuthentication.subscribe({
    next: (value) => {
      if (value) {
        router.navigate(['/dashboard/default']);
      }
    },
  });

  return true;
};
