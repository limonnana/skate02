import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  login: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.data.subscribe(({ login }) => (this.login = login));
    this.route.params.subscribe(params => {
      this.login = params['login'];
    });
  }
}
