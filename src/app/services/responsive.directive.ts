import { Directive, ElementRef } from "@angular/core";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
    selector: '[responsive]',
})
export class ResponsiveDirective {
    constructor(private elementRef: ElementRef, private breakpointObserver: BreakpointObserver) {

        this.breakpointObserver
            .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
            .subscribe({
                next: (result: any) => {
                    console.log(result);
                    for (let breakpoint of Object.keys(result.breakpoints)) {
                        if (result.breakpoints[breakpoint]) {
                            if (breakpoint === Breakpoints.HandsetPortrait) {
                                this.elementRef.nativeElement.classList.remove("desktop");
                            }
                            if (breakpoint === Breakpoints.WebLandscape) { this.elementRef.nativeElement.classList.add("desktop"); }
                        }
                    }
                },
            });
    }
}