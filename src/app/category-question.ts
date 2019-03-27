import { JsonObject, JsonProperty } from "json2typescript";
import { Question } from "./question";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@JsonObject("CategoryQuestion")
export class CategoryQuestion {
    @JsonProperty("cat_id",Number)
    cat_id: number
    @JsonProperty("cat_name",String)
    cat_name:string
    @JsonProperty("questions",Array)
    questions: Question[]
    
    formGroup: FormGroup

}
