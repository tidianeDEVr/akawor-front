import { Injectable, TemplateRef } from '@angular/core';
import { ToastInfo } from 'src/app/data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: ToastInfo[] = [];
  constructor() { }

	show(toast: ToastInfo) {
		this.toasts.push(toast);
	}

	remove(toast: ToastInfo) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}
