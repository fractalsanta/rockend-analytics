import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform, Slides } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { FilterPopOverPage } from '../../pages/filter-pop-over/filter-pop-over';
import { LoadingController } from 'ionic-angular';
import { PropertyPage } from '../../components/property/property';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  charts: any[] = [
    { title: 'Top 5 Suburbs', view: 'Month', img: 'Top5.PNG' },
    { title: 'Rent Amount Collected', view: 'Month', img: 'RentAmountCollected.PNG' },
    { title: 'Management Fee', view: 'Month', img: 'ManagementFee.PNG' },
    { title: 'Other Agency Fee', view: 'Month', img: 'OtherAgencyFees.PNG' },
    { title: 'Gain/Lost', view: 'Month', img: 'Gained.PNG' }
  ];

  selectedItem: any;
  isMobile: boolean;

  @ViewChild(Slides)
  slides: Slides;

  @ViewChild('popoverContent', { read: ElementRef })
  content: ElementRef;

  loadedTabs: number[] = [0];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    platform: Platform,
    public popoverCtrl: PopoverController,
    public loadingCtrl: LoadingController
  ) {
    this.selectedItem = navParams.get('chart');
    if (platform.is('mobile')) {
      this.isMobile = true;
    }
  }
  ngOnInit() {}

  slideChanged(slide) {
    if (this.loadedTabs.indexOf(slide.getActiveIndex()) < 0) {
      const loader = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loader.present();

      setTimeout(() => {
        let currentIndex = this.slides.getActiveIndex();
        this.loadedTabs.push(currentIndex);
        loader.dismiss();
      }, 500);
    }
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(FilterPopOverPage, {
      contentEle: this.content.nativeElement
    });

    popover.present({
      ev: ev
    });
  }

  filterChart(item) {
    this.selectedItem = item;
  }

  clearFilter() {
    this.selectedItem = null;
  }
}
