import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISeccion } from 'app/shared/model/seccion.model';
import { ITrick } from 'app/shared/model/trick.model';
import { ContributorsService } from './contributors.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'jhi-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
})
export class ContributorsComponent implements OnInit {
  id?: string | null = null;
  trick?: ITrick | null = null;
  secciones?: ISeccion[] | null = null;

  constructor(protected activatedRoute: ActivatedRoute, protected contributorsService: ContributorsService) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.contributorsService.find(this.id!).subscribe((res: HttpResponse<ITrick>) => {
      this.trick = res.body;
      this.secciones = this.trick!.secciones;
    });
  }
}
