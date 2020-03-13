import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private plans: string[] = [];

  getPlan(): string[] {
    return this.plans;
  }

  setPlan(plan: string): void {
    this.plans.push(plan);
  }

  updatePlan(index: number, plan: string) {
    this.plans.splice(index, 1, plan);
  }

  constructor() { }
}
