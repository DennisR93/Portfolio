import { Directive, ElementRef } from "@angular/core";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
    selector: '[responsive]',
})
export class ResponsiveDirective {
    constructor(private elementRef: ElementRef, private breakpointObserver: BreakpointObserver) {

        this.breakpointObserver
            .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape, Breakpoints.TabletPortrait])
            .subscribe({
                next: (result: any) => {
                    console.log(result);
                    for (let breakpoint of Object.keys(result.breakpoints)) {
                        if (result.breakpoints[breakpoint]) {
                            if (breakpoint === Breakpoints.HandsetPortrait) {
                                this.elementRef.nativeElement.classList.remove("desktop");
                                this.elementRef.nativeElement.classList.remove("tablet");
                            }
                            if(breakpoint === Breakpoints.TabletPortrait){
                                this.elementRef.nativeElement.classList.add("tablet");
                                this.elementRef.nativeElement.classList.remove("desktop");
                            }
                            if (breakpoint === Breakpoints.WebLandscape)
                            { 
                                this.elementRef.nativeElement.classList.add("desktop");
                            }
                        }
                    }
                },
            });
    }
}

// Can be added parentElement before classList