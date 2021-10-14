import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { librosViewModelService } from './servicios.service';

@Component({
  selector: 'app-libros',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class librosComponent implements OnInit {
  constructor(protected vm: librosViewModelService) {}
  public get VM(): librosViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}

@Component({
  selector: 'app-libros-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class librosListComponent implements OnInit {
  constructor(protected vm: librosViewModelService) {}
  public get VM(): librosViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}

@Component({
  selector: 'app-libros-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class librosAddComponent implements OnInit {
  constructor(protected vm: librosViewModelService) {}
  public get VM(): librosViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.add();
  }
}
@Component({
  selector: 'app-libros-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class librosEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: librosViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): librosViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
        this.vm.edit(id);
      } else {
        this.router.navigate(['/404.html']);
      }
    });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

@Component({
  selector: 'app-libros-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class librosViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: librosViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): librosViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
        this.vm.view(id);
      } else {
        this.router.navigate(['/404.html']);
      }
    });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

export const libros_COMPONENTES = [
  librosComponent,
  librosListComponent,
  librosAddComponent,
  librosEditComponent,
  librosViewComponent,
];
