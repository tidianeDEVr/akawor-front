import { inject } from "@angular/core"
import { Router } from "@angular/router";
import { SecurityService } from "src/app/modules/security/services/security.service"
import { ToastService } from "../services/toast.service";

export const isLoggedIn = async () => {
    const securityService = inject(SecurityService);
    const router = inject(Router);
    const toastService = inject(ToastService);
    return securityService.getAuthenticatedUser()
    .then((res)=>{
        if(!res.userEmail) {
            toastService.show({ body: 'Veuillez vous authentifier d\'abord !'});
            router.navigate(['/security/connexion']);
            return false;
        }
        return true;
    })
    .catch(()=>{
        router.navigate(['/security/connexion']);
        return false;
    })
}

export const isVendor = async () => {
    const securityService = inject(SecurityService);
    const router = inject(Router);
    const toastService = inject(ToastService);
    return securityService.getAuthenticatedUser()
    .then((res)=>{
        if(!res.userRole || res.userRole != 'ROLE_VENDEUR') {
            toastService.show({
                body: 'Vous n\'avez pas l\'autorisation d\'accéder à cette page !'
            });
            router.navigate(['/']);
            return false;
        }
        return true;
    })
    .catch(()=>{
        router.navigate(['/']);
        return false;
    })
}

export const isModerator = async () => {
    const securityService = inject(SecurityService);
    const router = inject(Router);
    const toastService = inject(ToastService);
    return securityService.getAuthenticatedUser()
    .then((res)=>{
        if(!res.userRole || res.userRole != 'ROLE_MODERATEUR') {
            toastService.show({
                body: 'Vous n\'avez pas l\'autorisation d\'accéder à cette page !'
            });
            router.navigate(['/']);
            return false;
        }
        return true;
    })
    .catch(()=>{
        router.navigate(['/']);
        return false;
    })
}