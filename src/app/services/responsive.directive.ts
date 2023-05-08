import { Directive, ElementRef } from "@angular/core";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
    selector: '[responsive]',
})
export class ResponsiveDirective {
    constructor(private elementRef: ElementRef, private breakpointObserver: BreakpointObserver) {

        this.breakpointObserver
            // Observe Breakpoints
            .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape, Breakpoints.TabletPortrait, Breakpoints.TabletLandscape])
            .subscribe({
                next: (result: any) => {
                    for (let breakpoint of Object.keys(result.breakpoints)) {
                        if (result.breakpoints[breakpoint]) {
                            // HandsetPortrait = Max width of 599px
                            if (breakpoint === Breakpoints.HandsetPortrait) {
                                this.elementRef.nativeElement.classList.remove("desktop");
                                this.elementRef.nativeElement.classList.remove("tablet");
                            }
                            // Tablet Portrait = Min Width 600px, Max Width 839px
                            if(breakpoint === Breakpoints.TabletPortrait){
                                this.elementRef.nativeElement.classList.add("tablet");
                                this.elementRef.nativeElement.classList.remove("desktop");
                            }
                            // Tablet Landscape = Min Width 960px, Max Width 1279px
                            if(breakpoint === Breakpoints.TabletLandscape){
                                this.elementRef.nativeElement.classList.add("tablet");
                                this.elementRef.nativeElement.classList.remove("desktop");
                            }
                            // Desktop Landscape = Min Width 1280px
                            if (breakpoint === Breakpoints.WebLandscape)
                            {
                                this.elementRef.nativeElement.classList.add("desktop");
                                this.elementRef.nativeElement.classList.remove("tablet");
                            }
                        }
                    }
                },
            });
    }
}