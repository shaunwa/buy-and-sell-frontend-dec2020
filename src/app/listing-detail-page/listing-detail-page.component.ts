import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { listings } from '../fake-listings';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
    listing: Listing;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
    ) { }

    goBack() {
        this.location.back();
    }

    goToContactPage() {
        this.router.navigateByUrl(`/contact/${this.listing.id}`);
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.listing = listings.find(listing => listing.id === id);
    }
}
