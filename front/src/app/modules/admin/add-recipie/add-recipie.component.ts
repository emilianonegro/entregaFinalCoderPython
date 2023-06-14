import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-recipie',
  templateUrl: './add-recipie.component.html',
  styleUrls: ['./add-recipie.component.css']
})
export class AddRecipieComponent implements OnInit {
  public form!: FormGroup;
  @Output() cancelRec = new EventEmitter();

  constructor(
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService
   ) {
    this.form = this._formBuilder.group({
      'title': [null, Validators.required ],
      'time': [null, Validators.required],
      'ingredients': [null, Validators.required],
      'steps': [null],
    });
  }

  ngOnInit(): void {
  }

  public cancelRecipie() {
    this.cancelRec.emit();
  }

  public saveForm() {
    console.log(this.form.valid);
    if (!this.form.valid){
      this._toastr.error('Completa los campos obligatorios')
      return
    }
    
    console.log(this.form.value);
    this._toastr.success('Receta creada correctamente');
    this.cancelRec.emit();
  }
}
