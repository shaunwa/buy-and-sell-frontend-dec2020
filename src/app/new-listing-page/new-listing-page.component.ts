import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {
    name: string = '';
    price: string = '';
    description: string = '';

    constructor(
        private listingsService: ListingsService,
        private router: Router,
    ) { }

    ngOnInit(): void {
    }

    onCreateListing(): void {
        this.listingsService.createNewListing(this.name, this.price, this.description)
            .subscribe(() => this.router.navigateByUrl('/my-listings'));
    }

}
