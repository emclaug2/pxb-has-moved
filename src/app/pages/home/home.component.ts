import { Component, OnInit } from '@angular/core';
import * as Colors from '@pxblue/colors';
import { ViewportService } from '../../services/viewport.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    colors = Colors;

    path: string;
    remaining = 8;

    // TODO: Update this to be the correct site after brightlayer-ui.github.io is published
    target = 'brightlayer-ui-dev';

    constructor(private readonly _viewportService: ViewportService) {}

    ngOnInit(): void {

        this.path = window.location.pathname;
        let params = window.location.href.split('?')[1];

        if (params) {
          params = '?' + params;
          this.path = this.path + params;
        }



      console.log(this.path);
        if (this.path === '/') {
            this.path = '';
        }

        setInterval(() => {
            this.remaining--;

            if (this.remaining === 0) {
                this.navigate();
            }
        }, 1000);
    }

    isSmall(): boolean {
        return this._viewportService.isSmall();
    }

    navigate(): void {
        window.location.href = `https://${this.target}.github.io${this.path}`;
    }

    learnMore(): void {
        window.location.href = `https://brightlayer-ui.github.io/brightlayer-ui-rebrand`;
    }
}
