import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FilePond, FilePondOptions } from 'filepond';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  public stepPercent: number = 25;
  public mainCategoryControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  public subCategoryControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  public filteredMainCatOptions: Observable<string[]> | undefined;
  public filteredSubCatOptions: Observable<string[]> | undefined;
  public mainCategories:string[] = [
    "Fashion", "Sacs", "Santé & beauté", "Chaussures", "Décoration", "Électronique", 
    "Nourriture", "Bébé & enfants","Fleures", "Appareils électromenagers"
  ]
  subCategories:string[] = [
    "Sub Fashion", "Sub Sacs", "Sub Santé & beauté", "Sub Chaussures", "Sub Décoration", "Sub Électronique", 
  ]

  @ViewChild('myPond')
  public myPond!: FilePond;

  ngOnInit() {
    this.filteredMainCatOptions = this.mainCategoryControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterMain(value || '')),
    );
    this.filteredSubCatOptions = this.subCategoryControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSub(value || '')),
    );
  }
  private _filterMain(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.mainCategories.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filterSub(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.subCategories.filter(option => option.toLowerCase().includes(filterValue));
  }

  stepUp(){
    if (this.stepPercent < 100) {
      this.stepPercent+= 25 
      this.changeProgressbarWidth(this.stepPercent);
    }
  }
  stepDown(){
    if (this.stepPercent > 25) {
      this.stepPercent-= 25
      this.changeProgressbarWidth(this.stepPercent);
    }
  }
  changeProgressbarWidth(number:number){
    let bar:HTMLElement | null = document.querySelector('.progress-bar');
    if (bar) bar.style.width = `${this.stepPercent}%`;
  }
  pondOptions: FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Cliquez ou déposez vos images...',
    acceptedFileTypes: ['image/*'],
    imagePreviewMaxFileSize: '10MB',
    allowReorder:true,
    maxFiles:6,
    credits: false,
    // FILE EDITS PARAMS
    allowImageEdit: true,
    styleImageEditButtonEditItemPosition: "center",
    imageEditInstantEdit: false,
    // configure Doka
    // imageEditEditor: Doka.create({
    //   // Doka.js options here ...

    //   cropAspectRatioOptions: [
    //       {
    //           label: 'Free',
    //           value: null,
    //       },
    //       {
    //           label: 'Portrait',
    //           value: 1.25,
    //       },
    //       {
    //           label: 'Square',
    //           value: 1,
    //       },
    //       {
    //           label: 'Landscape',
    //           value: 0.75,
    //       },
    //   ],
    // }),
  }

  pondFiles: FilePondOptions["files"] = [ ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }

  pondHandleRemoveFile(event: any) {
    console.log('A file was removed', event);
  }

  pondHandleActivateFile(event: any) {
    console.log('A file was activated', event)
  }

  uploadFiles(){
    console.log(this.myPond.getFiles());
  }

}
