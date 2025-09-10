import { Component, OnInit } from "@angular/core";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { GENDERS } from "../user-form/user-form.component";
import { User } from "../user.interface";
import { UserService } from "../user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
})
export class UserListComponent implements OnInit {
  faPencil = faPencil;
  faTrash = faTrash;

  users: User[] = [];

  constructor(private userService: UserService) {}

  async ngOnInit(): Promise<void> {
    await this.listUsers();
  }

  async listUsers(): Promise<void> {
    this.users = await this.userService.get<User[]>({
      url: "http://localhost:3000/getAllUsers",
      params: {},
    });
  }

  getLabelGender(value: string): string | undefined {
    const gender = GENDERS.find((g) => g.value === value);
    return gender?.label;
  }

  async delete(id: number): Promise<void> {
    if (confirm("Deseja deletar este usuário?")) {
      await this.userService.delete<any>({
        url: `http://localhost:3000/deleteUser/${id}`,
        params: {},
      });
      await this.listUsers();
    }
  }

  /** trackBy para otimização do ngFor */
  trackById(index: number, user: User): number {
    return user.id;
  }

  onConfirm(value: any) {
    alert("Value:" + value);
  }
}
