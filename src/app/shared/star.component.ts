import { Component } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html', 
    styleUrls: ['./star.component.css']
})

export class StarComponent {
    rating: number = 0;
    cropWidth: number = 0;
}