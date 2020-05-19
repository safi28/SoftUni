import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ArticleService } from "../article.service";
import { Router } from "@angular/router";
import { Article } from "../articleIn";
import { MatOption, MatSelectChange } from "@angular/material";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  optionText: string;
  key: string;


  foods: Article[] = [
    { value: "travel", viewValue: "Travel" },
    { value: "food", viewValue: "Food" }
  ];

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ["", [Validators.required]],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      like: [0, Validators.required]
    });
  }

  change(ev: MatSelectChange) {
    this.optionText = (ev.source.selected as MatOption).viewValue; // get the key of Option
    this.key = this.optionText.toLowerCase();
    console.log(this.key);
  }

  createArticleHandler(article) {
    if (this.key == "food") {
      this.articleService.createArticleFood(article);
      this.router.navigate(["/food"]);
    } else {
      this.articleService.createArticlTravel(article);
      this.router.navigate(["list"]);
    }
  }
}
