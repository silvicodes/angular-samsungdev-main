import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './usuario';

@Component({
  selector: 'app-formulariongular',
  templateUrl: './formularioAngular.component.html',
  styleUrls: ['./formularioAngular.component.css']
})
export class FormularioAngularComponent implements OnInit {

  contactform: FormGroup;
  usuarios: Usuario[] = [];
  newUsuario : Usuario | null = null;

  constructor() {
    this.contactform = new FormGroup({
      nombre: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      edad: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.min(0),Validators.max(125)]),
      dni: new FormControl ('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[0-9]{8}[A-Za-z]{1}')]),
      cumple: new FormControl ('', [Validators.required]),
      colorfav: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      genero: new FormControl ('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  registrar(): void
  {

		if (this.contactform.invalid || this.newUsuario != null)
		{
			return;
		}

    // Nuevo usuario:

		let usuario = new Usuario();

		usuario.nombre = this.contactform.value.nombre;
		usuario.apellidos = this.contactform.value.apellidos;
		usuario.edad = this.contactform.value.edad;
		usuario.dni = this.contactform.value.dni;
		usuario.cumple = this.contactform.value.cumple;
		usuario.colorfav = this.contactform.value.colorfav;
		usuario.genero = this.contactform.value.genero;

		// Añadimos usuario al array y reseteamos

		this.usuarios.push(usuario);
		this.contactform.reset();

  }

  eliminar(event : MouseEvent, usuario : Usuario) : void
	{
		for (let i = this.usuarios.length -1; i >= 0; i--)
		{
			if (this.usuarios[i] == usuario)
			{
				this.usuarios.splice(i, 1);
			}
		}

		if (this.newUsuario != null && this.newUsuario == usuario)
		{
			this.contactform.reset();
			this.newUsuario = null;
		}
  }

  modificar(event : MouseEvent, usuario : Usuario) : void
	{
		this.contactform.controls["nombre"].setValue(usuario.nombre);
		this.contactform.controls["apellidos"].setValue(usuario.apellidos);
		this.contactform.controls["edad"].setValue(usuario.edad);
		this.contactform.controls["dni"].setValue(usuario.dni);
		this.contactform.controls["cumple"].setValue(usuario.cumple);
		this.contactform.controls["colorfav"].setValue(usuario.colorfav);
		this.contactform.controls["genero"].setValue(usuario.genero);

		this.newUsuario = usuario;
	}

  finModificar(event : MouseEvent, usuario : Usuario) : void
	{
		for (let u of this.usuarios)
		{
			if ( u == usuario )
			{
				u.nombre = this.contactform.value.nombre;
				u.apellidos = this.contactform.value.apellidos;
				u.edad = this.contactform.value.edad;
				u.dni = this.contactform.value.dni;
				u.cumple = this.contactform.value.cumple;
				u.colorfav = this.contactform.value.colorfav;
				u.genero = this.contactform.value.genero;

				this.contactform.reset();
				this.newUsuario = null;

        break;
      }
    }
  }

}
