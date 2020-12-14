import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, HostListener } from '@angular/core';

@Component({
    selector: 'backToTop-component',
    templateUrl: 'backToTop.component.html',
    styles: [".scroll-to-top {position: fixed;bottom: 15px;right: 15px; opacity: 0; transition: all .2s ease-in-out;}", ".show-scrollTop {opacity: 1;transition: all .2s ease-in-out;}"]
})
export class BackToTopComponent implements OnInit {
    windowScrolled: boolean;
    constructor(@Inject(DOCUMENT) private document: Document) {}

    @HostListener("window:scroll", [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        } 
       else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    ngOnInit() {}
}