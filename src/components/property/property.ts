import { ApiTest } from './../../app/shared/api/data.service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CurrentMonth } from './../../app/shared/model/currentMonth';
import * as models from './../../app/shared/model/models';
/**
 * Generated class for the PropertyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'property',
  providers: [ApiTest],
  templateUrl: 'property.html'
})
export class PropertyPage {
  CurrentMonth: models.CurrentMonth[];
  GainLostByMonth: models.GainLostByMonth[];
  ModelError: models.ModelError[];
  PropertyDataByQuarter: models.PropertyDataByQuarter[];
  PropertyType: models.PropertyType[];
  ManagementFee: models.ManagementFee[];
  Suburb: models.Suburb[];

  constructor(private Api: ApiTest) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyPage');
  }

  ngOnInit() {
    //example call
    this.Api.getCurrentMonth().subscribe((cm: models.CurrentMonth[]) => {
      this.CurrentMonth = cm;
      console.log(this.CurrentMonth);
    });
  }
}
