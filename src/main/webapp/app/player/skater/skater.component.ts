import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-skater',
  templateUrl: './skater.component.html',
  styleUrls: ['./skater.component.scss'],
})
export class SkaterComponent implements OnInit {
  id: string | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
