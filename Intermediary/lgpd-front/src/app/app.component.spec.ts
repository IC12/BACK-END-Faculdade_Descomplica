import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { Title } from "@angular/platform-browser";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AppComponent],
      providers: [Title],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should set default title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const titleService = TestBed.inject(Title);
    expect(titleService.getTitle()).toBe("Projeto LGPD");
  });

  it("should render header brand", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".navbar-brand")?.textContent).toContain(
      "Projeto LGPD"
    );
  });
});
