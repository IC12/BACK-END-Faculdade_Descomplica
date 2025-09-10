import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { User } from "../user.interface";
import { UserService } from "../user.service";

export const GENDERS = [
  { label: "Homem", value: "male" },
  { label: "Mulher", value: "feme" },
  { label: "Outro", value: "other" },
];

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
})
export class UserFormComponent {
  form = new FormGroup({});
  model: User | any = {};
  options: FormlyFormOptions = {};

  fileSelected?: File;
  url?: SafeResourceUrl;

  fields: FormlyFieldConfig[] = [
    {
      className: "d-flex align-content-center justify-content-center",
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          key: "first_name",
          type: "input",
          props: {
            label: "Nome",
            placeholder: "Primeiro Nome",
            required: true,
          },
        },
        {
          key: "last_name",
          type: "input",
          props: {
            label: "Sobrenome",
            placeholder: "Nome da Família",
            required: true,
          },
        },
        {
          key: "email",
          type: "input",
          props: {
            label: "Email",
            placeholder: "Email",
            required: true,
          },
        },
        {
          key: "gender",
          type: "select",
          props: {
            label: "Gênero",
            placeholder: "Selecione o gênero",
            required: true,
            options: GENDERS,
          },
        },
      ],
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private http: HttpClient,
    private domSanitizer: DomSanitizer
  ) {
    this.route.queryParams.subscribe(async (params: any) => {
      if (params.id) {
        this.model = await this.userService.get<User>({
          url: `http://localhost:3000/user/${params.id}`,
          params: {},
        });
        this.url = this.model.profile_picture;
      } else {
        this.model = {};
      }
    });
  }

  onSelectNewFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileSelected = input.files[0];
      this.url = this.domSanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(this.fileSelected)
      );
    }
  }

  async onSubmit(): Promise<void> {
    if (!this.form.valid) return;

    const formData = new FormData();
    formData.append("first_name", this.model.first_name);
    formData.append("last_name", this.model.last_name);
    formData.append("email", this.model.email);
    formData.append("gender", this.model.gender);
    if (this.fileSelected) {
      formData.append("file", this.fileSelected);
    }

    if (this.model?.id) {
      await this.userService.put<User>({
        url: `http://localhost:3000/updateUser/${this.model.id}`,
        params: {},
        data: formData,
      });
    } else {
      await this.userService.post<User>({
        url: `http://localhost:3000/addUser`,
        params: {},
        data: formData,
      });
    }

    await this.router.navigate(["/users"]);
  }

  cancel(): void {
    this.router.navigate(["/users"]);
  }
}
